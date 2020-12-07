// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_kubernetes_service_versions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKubernetesServiceVersionsConfig extends cdktf.TerraformMetaArguments {
  readonly includePreview?: boolean;
  readonly location: string;
  readonly versionPrefix?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermKubernetesServiceVersionsTimeouts;
}
export interface DataAzurermKubernetesServiceVersionsTimeouts {
  readonly read?: string;
}

function dataAzurermKubernetesServiceVersionsTimeoutsToTerraform(struct?: DataAzurermKubernetesServiceVersionsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermKubernetesServiceVersions extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermKubernetesServiceVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_service_versions',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._includePreview = config.includePreview;
    this._location = config.location;
    this._versionPrefix = config.versionPrefix;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_preview - computed: false, optional: true, required: false
  private _includePreview?: boolean;
  public get includePreview() {
    return this.getBooleanAttribute('include_preview');
  }
  public set includePreview(value: boolean ) {
    this._includePreview = value;
  }
  public resetIncludePreview() {
    this._includePreview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePreviewInput() {
    return this._includePreview
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // version_prefix - computed: false, optional: true, required: false
  private _versionPrefix?: string;
  public get versionPrefix() {
    return this.getStringAttribute('version_prefix');
  }
  public set versionPrefix(value: string ) {
    this._versionPrefix = value;
  }
  public resetVersionPrefix() {
    this._versionPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPrefixInput() {
    return this._versionPrefix
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return this.getListAttribute('versions');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKubernetesServiceVersionsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermKubernetesServiceVersionsTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_preview: cdktf.booleanToTerraform(this._includePreview),
      location: cdktf.stringToTerraform(this._location),
      version_prefix: cdktf.stringToTerraform(this._versionPrefix),
      timeouts: dataAzurermKubernetesServiceVersionsTimeoutsToTerraform(this._timeouts),
    };
  }
}

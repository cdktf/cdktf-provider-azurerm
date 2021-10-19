// https://www.terraform.io/docs/providers/azurerm/d/kubernetes_service_versions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKubernetesServiceVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_service_versions.html#include_preview DataAzurermKubernetesServiceVersions#include_preview}
  */
  readonly includePreview?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_service_versions.html#location DataAzurermKubernetesServiceVersions#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_service_versions.html#version_prefix DataAzurermKubernetesServiceVersions#version_prefix}
  */
  readonly versionPrefix?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_service_versions.html#timeouts DataAzurermKubernetesServiceVersions#timeouts}
  */
  readonly timeouts?: DataAzurermKubernetesServiceVersionsTimeouts;
}
export interface DataAzurermKubernetesServiceVersionsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_service_versions.html#read DataAzurermKubernetesServiceVersions#read}
  */
  readonly read?: string;
}

function dataAzurermKubernetesServiceVersionsTimeoutsToTerraform(struct?: DataAzurermKubernetesServiceVersionsTimeoutsOutputReference | DataAzurermKubernetesServiceVersionsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermKubernetesServiceVersionsTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_service_versions.html azurerm_kubernetes_service_versions}
*/
export class DataAzurermKubernetesServiceVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kubernetes_service_versions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_service_versions.html azurerm_kubernetes_service_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKubernetesServiceVersionsConfig
  */
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
  private _includePreview?: boolean | cdktf.IResolvable | undefined; 
  public get includePreview() {
    return this.getBooleanAttribute('include_preview') as any;
  }
  public set includePreview(value: boolean | cdktf.IResolvable | undefined) {
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
  private _location?: string; 
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
  private _versionPrefix?: string | undefined; 
  public get versionPrefix() {
    return this.getStringAttribute('version_prefix');
  }
  public set versionPrefix(value: string | undefined) {
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
  private _timeouts?: DataAzurermKubernetesServiceVersionsTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermKubernetesServiceVersionsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermKubernetesServiceVersionsTimeouts | undefined) {
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

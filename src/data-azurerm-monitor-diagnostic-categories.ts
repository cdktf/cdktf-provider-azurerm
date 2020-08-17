// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_monitor_diagnostic_categories.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermMonitorDiagnosticCategoriesConfig extends TerraformMetaArguments {
  readonly resourceId: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermMonitorDiagnosticCategoriesTimeouts;
}
export interface DataAzurermMonitorDiagnosticCategoriesTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermMonitorDiagnosticCategories extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermMonitorDiagnosticCategoriesConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_diagnostic_categories',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceId = config.resourceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // logs - computed: true, optional: false, required: true
  public get logs() {
    return this.getListAttribute('logs');
  }

  // metrics - computed: true, optional: false, required: true
  public get metrics() {
    return this.getListAttribute('metrics');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this._resourceId;
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMonitorDiagnosticCategoriesTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermMonitorDiagnosticCategoriesTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_id: this._resourceId,
      timeouts: this._timeouts,
    };
  }
}

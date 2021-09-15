// https://www.terraform.io/docs/providers/azurerm/d/monitor_diagnostic_categories.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMonitorDiagnosticCategoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_diagnostic_categories.html#resource_id DataAzurermMonitorDiagnosticCategories#resource_id}
  */
  readonly resourceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_diagnostic_categories.html#timeouts DataAzurermMonitorDiagnosticCategories#timeouts}
  */
  readonly timeouts?: DataAzurermMonitorDiagnosticCategoriesTimeouts;
}
export interface DataAzurermMonitorDiagnosticCategoriesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_diagnostic_categories.html#read DataAzurermMonitorDiagnosticCategories#read}
  */
  readonly read?: string;
}

function dataAzurermMonitorDiagnosticCategoriesTimeoutsToTerraform(struct?: DataAzurermMonitorDiagnosticCategoriesTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_diagnostic_categories.html azurerm_monitor_diagnostic_categories}
*/
export class DataAzurermMonitorDiagnosticCategories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_diagnostic_categories";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_diagnostic_categories.html azurerm_monitor_diagnostic_categories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermMonitorDiagnosticCategoriesConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // logs - computed: true, optional: false, required: false
  public get logs() {
    return this.getListAttribute('logs');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getListAttribute('metrics');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMonitorDiagnosticCategoriesTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermMonitorDiagnosticCategoriesTimeouts ) {
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
      resource_id: cdktf.stringToTerraform(this._resourceId),
      timeouts: dataAzurermMonitorDiagnosticCategoriesTimeoutsToTerraform(this._timeouts),
    };
  }
}

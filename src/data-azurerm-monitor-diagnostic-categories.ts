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

function dataAzurermMonitorDiagnosticCategoriesTimeoutsToTerraform(struct?: DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference | DataAzurermMonitorDiagnosticCategoriesTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference extends cdktf.ComplexObject {
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
  private _resourceId?: string; 
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
  private _timeouts?: DataAzurermMonitorDiagnosticCategoriesTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermMonitorDiagnosticCategoriesTimeouts | undefined) {
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

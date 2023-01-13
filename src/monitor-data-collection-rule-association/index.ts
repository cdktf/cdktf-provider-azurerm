// https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorDataCollectionRuleAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#data_collection_endpoint_id MonitorDataCollectionRuleAssociation#data_collection_endpoint_id}
  */
  readonly dataCollectionEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#data_collection_rule_id MonitorDataCollectionRuleAssociation#data_collection_rule_id}
  */
  readonly dataCollectionRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#description MonitorDataCollectionRuleAssociation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#id MonitorDataCollectionRuleAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#name MonitorDataCollectionRuleAssociation#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#target_resource_id MonitorDataCollectionRuleAssociation#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#timeouts MonitorDataCollectionRuleAssociation#timeouts}
  */
  readonly timeouts?: MonitorDataCollectionRuleAssociationTimeouts;
}
export interface MonitorDataCollectionRuleAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#create MonitorDataCollectionRuleAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#delete MonitorDataCollectionRuleAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#read MonitorDataCollectionRuleAssociation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association#update MonitorDataCollectionRuleAssociation#update}
  */
  readonly update?: string;
}

export function monitorDataCollectionRuleAssociationTimeoutsToTerraform(struct?: MonitorDataCollectionRuleAssociationTimeoutsOutputReference | MonitorDataCollectionRuleAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class MonitorDataCollectionRuleAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleAssociationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleAssociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association azurerm_monitor_data_collection_rule_association}
*/
export class MonitorDataCollectionRuleAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_data_collection_rule_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule_association azurerm_monitor_data_collection_rule_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorDataCollectionRuleAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorDataCollectionRuleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_data_collection_rule_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.39.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataCollectionEndpointId = config.dataCollectionEndpointId;
    this._dataCollectionRuleId = config.dataCollectionRuleId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._targetResourceId = config.targetResourceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_collection_endpoint_id - computed: false, optional: true, required: false
  private _dataCollectionEndpointId?: string; 
  public get dataCollectionEndpointId() {
    return this.getStringAttribute('data_collection_endpoint_id');
  }
  public set dataCollectionEndpointId(value: string) {
    this._dataCollectionEndpointId = value;
  }
  public resetDataCollectionEndpointId() {
    this._dataCollectionEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionEndpointIdInput() {
    return this._dataCollectionEndpointId;
  }

  // data_collection_rule_id - computed: false, optional: true, required: false
  private _dataCollectionRuleId?: string; 
  public get dataCollectionRuleId() {
    return this.getStringAttribute('data_collection_rule_id');
  }
  public set dataCollectionRuleId(value: string) {
    this._dataCollectionRuleId = value;
  }
  public resetDataCollectionRuleId() {
    this._dataCollectionRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionRuleIdInput() {
    return this._dataCollectionRuleId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorDataCollectionRuleAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorDataCollectionRuleAssociationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_collection_endpoint_id: cdktf.stringToTerraform(this._dataCollectionEndpointId),
      data_collection_rule_id: cdktf.stringToTerraform(this._dataCollectionRuleId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      timeouts: monitorDataCollectionRuleAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

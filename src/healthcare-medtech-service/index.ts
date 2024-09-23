// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareMedtechServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#device_mapping_json HealthcareMedtechService#device_mapping_json}
  */
  readonly deviceMappingJson: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#eventhub_consumer_group_name HealthcareMedtechService#eventhub_consumer_group_name}
  */
  readonly eventhubConsumerGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#eventhub_name HealthcareMedtechService#eventhub_name}
  */
  readonly eventhubName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#eventhub_namespace_name HealthcareMedtechService#eventhub_namespace_name}
  */
  readonly eventhubNamespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#id HealthcareMedtechService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#location HealthcareMedtechService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#name HealthcareMedtechService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#tags HealthcareMedtechService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#workspace_id HealthcareMedtechService#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#identity HealthcareMedtechService#identity}
  */
  readonly identity?: HealthcareMedtechServiceIdentity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#timeouts HealthcareMedtechService#timeouts}
  */
  readonly timeouts?: HealthcareMedtechServiceTimeouts;
}
export interface HealthcareMedtechServiceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#identity_ids HealthcareMedtechService#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#type HealthcareMedtechService#type}
  */
  readonly type: string;
}

export function healthcareMedtechServiceIdentityToTerraform(struct?: HealthcareMedtechServiceIdentityOutputReference | HealthcareMedtechServiceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function healthcareMedtechServiceIdentityToHclTerraform(struct?: HealthcareMedtechServiceIdentityOutputReference | HealthcareMedtechServiceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcareMedtechServiceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcareMedtechServiceIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareMedtechServiceIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface HealthcareMedtechServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#create HealthcareMedtechService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#delete HealthcareMedtechService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#read HealthcareMedtechService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#update HealthcareMedtechService#update}
  */
  readonly update?: string;
}

export function healthcareMedtechServiceTimeoutsToTerraform(struct?: HealthcareMedtechServiceTimeouts | cdktf.IResolvable): any {
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


export function healthcareMedtechServiceTimeoutsToHclTerraform(struct?: HealthcareMedtechServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcareMedtechServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthcareMedtechServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HealthcareMedtechServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service azurerm_healthcare_medtech_service}
*/
export class HealthcareMedtechService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_healthcare_medtech_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthcareMedtechService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthcareMedtechService to import
  * @param importFromId The id of the existing HealthcareMedtechService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthcareMedtechService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_healthcare_medtech_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service azurerm_healthcare_medtech_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareMedtechServiceConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareMedtechServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_healthcare_medtech_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceMappingJson = config.deviceMappingJson;
    this._eventhubConsumerGroupName = config.eventhubConsumerGroupName;
    this._eventhubName = config.eventhubName;
    this._eventhubNamespaceName = config.eventhubNamespaceName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._tags = config.tags;
    this._workspaceId = config.workspaceId;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_mapping_json - computed: false, optional: false, required: true
  private _deviceMappingJson?: string; 
  public get deviceMappingJson() {
    return this.getStringAttribute('device_mapping_json');
  }
  public set deviceMappingJson(value: string) {
    this._deviceMappingJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceMappingJsonInput() {
    return this._deviceMappingJson;
  }

  // eventhub_consumer_group_name - computed: false, optional: false, required: true
  private _eventhubConsumerGroupName?: string; 
  public get eventhubConsumerGroupName() {
    return this.getStringAttribute('eventhub_consumer_group_name');
  }
  public set eventhubConsumerGroupName(value: string) {
    this._eventhubConsumerGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubConsumerGroupNameInput() {
    return this._eventhubConsumerGroupName;
  }

  // eventhub_name - computed: false, optional: false, required: true
  private _eventhubName?: string; 
  public get eventhubName() {
    return this.getStringAttribute('eventhub_name');
  }
  public set eventhubName(value: string) {
    this._eventhubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNameInput() {
    return this._eventhubName;
  }

  // eventhub_namespace_name - computed: false, optional: false, required: true
  private _eventhubNamespaceName?: string; 
  public get eventhubNamespaceName() {
    return this.getStringAttribute('eventhub_namespace_name');
  }
  public set eventhubNamespaceName(value: string) {
    this._eventhubNamespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNamespaceNameInput() {
    return this._eventhubNamespaceName;
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
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new HealthcareMedtechServiceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: HealthcareMedtechServiceIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HealthcareMedtechServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HealthcareMedtechServiceTimeouts) {
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
      device_mapping_json: cdktf.stringToTerraform(this._deviceMappingJson),
      eventhub_consumer_group_name: cdktf.stringToTerraform(this._eventhubConsumerGroupName),
      eventhub_name: cdktf.stringToTerraform(this._eventhubName),
      eventhub_namespace_name: cdktf.stringToTerraform(this._eventhubNamespaceName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      identity: healthcareMedtechServiceIdentityToTerraform(this._identity.internalValue),
      timeouts: healthcareMedtechServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_mapping_json: {
        value: cdktf.stringToHclTerraform(this._deviceMappingJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_consumer_group_name: {
        value: cdktf.stringToHclTerraform(this._eventhubConsumerGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_name: {
        value: cdktf.stringToHclTerraform(this._eventhubName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_namespace_name: {
        value: cdktf.stringToHclTerraform(this._eventhubNamespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity: {
        value: healthcareMedtechServiceIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthcareMedtechServiceIdentityList",
      },
      timeouts: {
        value: healthcareMedtechServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HealthcareMedtechServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

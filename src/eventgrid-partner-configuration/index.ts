// https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridPartnerConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#default_maximum_expiration_time_in_days EventgridPartnerConfiguration#default_maximum_expiration_time_in_days}
  */
  readonly defaultMaximumExpirationTimeInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#id EventgridPartnerConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#resource_group_name EventgridPartnerConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#tags EventgridPartnerConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * partner_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#partner_authorization EventgridPartnerConfiguration#partner_authorization}
  */
  readonly partnerAuthorization?: EventgridPartnerConfigurationPartnerAuthorization[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#timeouts EventgridPartnerConfiguration#timeouts}
  */
  readonly timeouts?: EventgridPartnerConfigurationTimeouts;
}
export interface EventgridPartnerConfigurationPartnerAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#authorization_expiration_time_in_utc EventgridPartnerConfiguration#authorization_expiration_time_in_utc}
  */
  readonly authorizationExpirationTimeInUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#partner_name EventgridPartnerConfiguration#partner_name}
  */
  readonly partnerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#partner_registration_id EventgridPartnerConfiguration#partner_registration_id}
  */
  readonly partnerRegistrationId: string;
}

export function eventgridPartnerConfigurationPartnerAuthorizationToTerraform(struct?: EventgridPartnerConfigurationPartnerAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_expiration_time_in_utc: cdktf.stringToTerraform(struct!.authorizationExpirationTimeInUtc),
    partner_name: cdktf.stringToTerraform(struct!.partnerName),
    partner_registration_id: cdktf.stringToTerraform(struct!.partnerRegistrationId),
  }
}


export function eventgridPartnerConfigurationPartnerAuthorizationToHclTerraform(struct?: EventgridPartnerConfigurationPartnerAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_expiration_time_in_utc: {
      value: cdktf.stringToHclTerraform(struct!.authorizationExpirationTimeInUtc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partner_name: {
      value: cdktf.stringToHclTerraform(struct!.partnerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partner_registration_id: {
      value: cdktf.stringToHclTerraform(struct!.partnerRegistrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridPartnerConfigurationPartnerAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventgridPartnerConfigurationPartnerAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationExpirationTimeInUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationExpirationTimeInUtc = this._authorizationExpirationTimeInUtc;
    }
    if (this._partnerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerName = this._partnerName;
    }
    if (this._partnerRegistrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerRegistrationId = this._partnerRegistrationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridPartnerConfigurationPartnerAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationExpirationTimeInUtc = undefined;
      this._partnerName = undefined;
      this._partnerRegistrationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationExpirationTimeInUtc = value.authorizationExpirationTimeInUtc;
      this._partnerName = value.partnerName;
      this._partnerRegistrationId = value.partnerRegistrationId;
    }
  }

  // authorization_expiration_time_in_utc - computed: false, optional: true, required: false
  private _authorizationExpirationTimeInUtc?: string; 
  public get authorizationExpirationTimeInUtc() {
    return this.getStringAttribute('authorization_expiration_time_in_utc');
  }
  public set authorizationExpirationTimeInUtc(value: string) {
    this._authorizationExpirationTimeInUtc = value;
  }
  public resetAuthorizationExpirationTimeInUtc() {
    this._authorizationExpirationTimeInUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationExpirationTimeInUtcInput() {
    return this._authorizationExpirationTimeInUtc;
  }

  // partner_name - computed: false, optional: false, required: true
  private _partnerName?: string; 
  public get partnerName() {
    return this.getStringAttribute('partner_name');
  }
  public set partnerName(value: string) {
    this._partnerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerNameInput() {
    return this._partnerName;
  }

  // partner_registration_id - computed: false, optional: false, required: true
  private _partnerRegistrationId?: string; 
  public get partnerRegistrationId() {
    return this.getStringAttribute('partner_registration_id');
  }
  public set partnerRegistrationId(value: string) {
    this._partnerRegistrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerRegistrationIdInput() {
    return this._partnerRegistrationId;
  }
}

export class EventgridPartnerConfigurationPartnerAuthorizationList extends cdktf.ComplexList {
  public internalValue? : EventgridPartnerConfigurationPartnerAuthorization[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EventgridPartnerConfigurationPartnerAuthorizationOutputReference {
    return new EventgridPartnerConfigurationPartnerAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridPartnerConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#create EventgridPartnerConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#delete EventgridPartnerConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#read EventgridPartnerConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#update EventgridPartnerConfiguration#update}
  */
  readonly update?: string;
}

export function eventgridPartnerConfigurationTimeoutsToTerraform(struct?: EventgridPartnerConfigurationTimeouts | cdktf.IResolvable): any {
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


export function eventgridPartnerConfigurationTimeoutsToHclTerraform(struct?: EventgridPartnerConfigurationTimeouts | cdktf.IResolvable): any {
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

export class EventgridPartnerConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventgridPartnerConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventgridPartnerConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration azurerm_eventgrid_partner_configuration}
*/
export class EventgridPartnerConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_eventgrid_partner_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventgridPartnerConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventgridPartnerConfiguration to import
  * @param importFromId The id of the existing EventgridPartnerConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventgridPartnerConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_eventgrid_partner_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/eventgrid_partner_configuration azurerm_eventgrid_partner_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventgridPartnerConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EventgridPartnerConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_partner_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.28.0',
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
    this._defaultMaximumExpirationTimeInDays = config.defaultMaximumExpirationTimeInDays;
    this._id = config.id;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._partnerAuthorization.internalValue = config.partnerAuthorization;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_maximum_expiration_time_in_days - computed: false, optional: true, required: false
  private _defaultMaximumExpirationTimeInDays?: number; 
  public get defaultMaximumExpirationTimeInDays() {
    return this.getNumberAttribute('default_maximum_expiration_time_in_days');
  }
  public set defaultMaximumExpirationTimeInDays(value: number) {
    this._defaultMaximumExpirationTimeInDays = value;
  }
  public resetDefaultMaximumExpirationTimeInDays() {
    this._defaultMaximumExpirationTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMaximumExpirationTimeInDaysInput() {
    return this._defaultMaximumExpirationTimeInDays;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
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

  // partner_authorization - computed: false, optional: true, required: false
  private _partnerAuthorization = new EventgridPartnerConfigurationPartnerAuthorizationList(this, "partner_authorization", false);
  public get partnerAuthorization() {
    return this._partnerAuthorization;
  }
  public putPartnerAuthorization(value: EventgridPartnerConfigurationPartnerAuthorization[] | cdktf.IResolvable) {
    this._partnerAuthorization.internalValue = value;
  }
  public resetPartnerAuthorization() {
    this._partnerAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerAuthorizationInput() {
    return this._partnerAuthorization.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EventgridPartnerConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventgridPartnerConfigurationTimeouts) {
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
      default_maximum_expiration_time_in_days: cdktf.numberToTerraform(this._defaultMaximumExpirationTimeInDays),
      id: cdktf.stringToTerraform(this._id),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      partner_authorization: cdktf.listMapper(eventgridPartnerConfigurationPartnerAuthorizationToTerraform, true)(this._partnerAuthorization.internalValue),
      timeouts: eventgridPartnerConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_maximum_expiration_time_in_days: {
        value: cdktf.numberToHclTerraform(this._defaultMaximumExpirationTimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
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
      partner_authorization: {
        value: cdktf.listMapperHcl(eventgridPartnerConfigurationPartnerAuthorizationToHclTerraform, true)(this._partnerAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridPartnerConfigurationPartnerAuthorizationList",
      },
      timeouts: {
        value: eventgridPartnerConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventgridPartnerConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

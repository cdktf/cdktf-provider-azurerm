// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PaloAltoLocalRulestackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#anti_spyware_profile PaloAltoLocalRulestack#anti_spyware_profile}
  */
  readonly antiSpywareProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#anti_virus_profile PaloAltoLocalRulestack#anti_virus_profile}
  */
  readonly antiVirusProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#description PaloAltoLocalRulestack#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#dns_subscription PaloAltoLocalRulestack#dns_subscription}
  */
  readonly dnsSubscription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#file_blocking_profile PaloAltoLocalRulestack#file_blocking_profile}
  */
  readonly fileBlockingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#id PaloAltoLocalRulestack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#location PaloAltoLocalRulestack#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#name PaloAltoLocalRulestack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#resource_group_name PaloAltoLocalRulestack#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#url_filtering_profile PaloAltoLocalRulestack#url_filtering_profile}
  */
  readonly urlFilteringProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#vulnerability_profile PaloAltoLocalRulestack#vulnerability_profile}
  */
  readonly vulnerabilityProfile?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#timeouts PaloAltoLocalRulestack#timeouts}
  */
  readonly timeouts?: PaloAltoLocalRulestackTimeouts;
}
export interface PaloAltoLocalRulestackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#create PaloAltoLocalRulestack#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#delete PaloAltoLocalRulestack#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#read PaloAltoLocalRulestack#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#update PaloAltoLocalRulestack#update}
  */
  readonly update?: string;
}

export function paloAltoLocalRulestackTimeoutsToTerraform(struct?: PaloAltoLocalRulestackTimeouts | cdktf.IResolvable): any {
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


export function paloAltoLocalRulestackTimeoutsToHclTerraform(struct?: PaloAltoLocalRulestackTimeouts | cdktf.IResolvable): any {
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

export class PaloAltoLocalRulestackTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaloAltoLocalRulestackTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PaloAltoLocalRulestackTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack azurerm_palo_alto_local_rulestack}
*/
export class PaloAltoLocalRulestack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_palo_alto_local_rulestack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PaloAltoLocalRulestack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PaloAltoLocalRulestack to import
  * @param importFromId The id of the existing PaloAltoLocalRulestack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PaloAltoLocalRulestack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_palo_alto_local_rulestack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack azurerm_palo_alto_local_rulestack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PaloAltoLocalRulestackConfig
  */
  public constructor(scope: Construct, id: string, config: PaloAltoLocalRulestackConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_palo_alto_local_rulestack',
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
    this._antiSpywareProfile = config.antiSpywareProfile;
    this._antiVirusProfile = config.antiVirusProfile;
    this._description = config.description;
    this._dnsSubscription = config.dnsSubscription;
    this._fileBlockingProfile = config.fileBlockingProfile;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._urlFilteringProfile = config.urlFilteringProfile;
    this._vulnerabilityProfile = config.vulnerabilityProfile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_spyware_profile - computed: false, optional: true, required: false
  private _antiSpywareProfile?: string; 
  public get antiSpywareProfile() {
    return this.getStringAttribute('anti_spyware_profile');
  }
  public set antiSpywareProfile(value: string) {
    this._antiSpywareProfile = value;
  }
  public resetAntiSpywareProfile() {
    this._antiSpywareProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpywareProfileInput() {
    return this._antiSpywareProfile;
  }

  // anti_virus_profile - computed: false, optional: true, required: false
  private _antiVirusProfile?: string; 
  public get antiVirusProfile() {
    return this.getStringAttribute('anti_virus_profile');
  }
  public set antiVirusProfile(value: string) {
    this._antiVirusProfile = value;
  }
  public resetAntiVirusProfile() {
    this._antiVirusProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusProfileInput() {
    return this._antiVirusProfile;
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

  // dns_subscription - computed: false, optional: true, required: false
  private _dnsSubscription?: string; 
  public get dnsSubscription() {
    return this.getStringAttribute('dns_subscription');
  }
  public set dnsSubscription(value: string) {
    this._dnsSubscription = value;
  }
  public resetDnsSubscription() {
    this._dnsSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSubscriptionInput() {
    return this._dnsSubscription;
  }

  // file_blocking_profile - computed: false, optional: true, required: false
  private _fileBlockingProfile?: string; 
  public get fileBlockingProfile() {
    return this.getStringAttribute('file_blocking_profile');
  }
  public set fileBlockingProfile(value: string) {
    this._fileBlockingProfile = value;
  }
  public resetFileBlockingProfile() {
    this._fileBlockingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockingProfileInput() {
    return this._fileBlockingProfile;
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

  // url_filtering_profile - computed: false, optional: true, required: false
  private _urlFilteringProfile?: string; 
  public get urlFilteringProfile() {
    return this.getStringAttribute('url_filtering_profile');
  }
  public set urlFilteringProfile(value: string) {
    this._urlFilteringProfile = value;
  }
  public resetUrlFilteringProfile() {
    this._urlFilteringProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringProfileInput() {
    return this._urlFilteringProfile;
  }

  // vulnerability_profile - computed: false, optional: true, required: false
  private _vulnerabilityProfile?: string; 
  public get vulnerabilityProfile() {
    return this.getStringAttribute('vulnerability_profile');
  }
  public set vulnerabilityProfile(value: string) {
    this._vulnerabilityProfile = value;
  }
  public resetVulnerabilityProfile() {
    this._vulnerabilityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityProfileInput() {
    return this._vulnerabilityProfile;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PaloAltoLocalRulestackTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PaloAltoLocalRulestackTimeouts) {
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
      anti_spyware_profile: cdktf.stringToTerraform(this._antiSpywareProfile),
      anti_virus_profile: cdktf.stringToTerraform(this._antiVirusProfile),
      description: cdktf.stringToTerraform(this._description),
      dns_subscription: cdktf.stringToTerraform(this._dnsSubscription),
      file_blocking_profile: cdktf.stringToTerraform(this._fileBlockingProfile),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      url_filtering_profile: cdktf.stringToTerraform(this._urlFilteringProfile),
      vulnerability_profile: cdktf.stringToTerraform(this._vulnerabilityProfile),
      timeouts: paloAltoLocalRulestackTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_spyware_profile: {
        value: cdktf.stringToHclTerraform(this._antiSpywareProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_virus_profile: {
        value: cdktf.stringToHclTerraform(this._antiVirusProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_subscription: {
        value: cdktf.stringToHclTerraform(this._dnsSubscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_blocking_profile: {
        value: cdktf.stringToHclTerraform(this._fileBlockingProfile),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_filtering_profile: {
        value: cdktf.stringToHclTerraform(this._urlFilteringProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerability_profile: {
        value: cdktf.stringToHclTerraform(this._vulnerabilityProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: paloAltoLocalRulestackTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PaloAltoLocalRulestackTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

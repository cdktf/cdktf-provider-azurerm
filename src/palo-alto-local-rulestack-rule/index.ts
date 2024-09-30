// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PaloAltoLocalRulestackRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#action PaloAltoLocalRulestackRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#applications PaloAltoLocalRulestackRule#applications}
  */
  readonly applications: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#audit_comment PaloAltoLocalRulestackRule#audit_comment}
  */
  readonly auditComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#decryption_rule_type PaloAltoLocalRulestackRule#decryption_rule_type}
  */
  readonly decryptionRuleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#description PaloAltoLocalRulestackRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#enabled PaloAltoLocalRulestackRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#id PaloAltoLocalRulestackRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#inspection_certificate_id PaloAltoLocalRulestackRule#inspection_certificate_id}
  */
  readonly inspectionCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#logging_enabled PaloAltoLocalRulestackRule#logging_enabled}
  */
  readonly loggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#name PaloAltoLocalRulestackRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#negate_destination PaloAltoLocalRulestackRule#negate_destination}
  */
  readonly negateDestination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#negate_source PaloAltoLocalRulestackRule#negate_source}
  */
  readonly negateSource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#priority PaloAltoLocalRulestackRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#protocol PaloAltoLocalRulestackRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#protocol_ports PaloAltoLocalRulestackRule#protocol_ports}
  */
  readonly protocolPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#rulestack_id PaloAltoLocalRulestackRule#rulestack_id}
  */
  readonly rulestackId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#tags PaloAltoLocalRulestackRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#category PaloAltoLocalRulestackRule#category}
  */
  readonly category?: PaloAltoLocalRulestackRuleCategory;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#destination PaloAltoLocalRulestackRule#destination}
  */
  readonly destination: PaloAltoLocalRulestackRuleDestination;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#source PaloAltoLocalRulestackRule#source}
  */
  readonly source: PaloAltoLocalRulestackRuleSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#timeouts PaloAltoLocalRulestackRule#timeouts}
  */
  readonly timeouts?: PaloAltoLocalRulestackRuleTimeouts;
}
export interface PaloAltoLocalRulestackRuleCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#custom_urls PaloAltoLocalRulestackRule#custom_urls}
  */
  readonly customUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}
  */
  readonly feeds?: string[];
}

export function paloAltoLocalRulestackRuleCategoryToTerraform(struct?: PaloAltoLocalRulestackRuleCategoryOutputReference | PaloAltoLocalRulestackRuleCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customUrls),
    feeds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.feeds),
  }
}


export function paloAltoLocalRulestackRuleCategoryToHclTerraform(struct?: PaloAltoLocalRulestackRuleCategoryOutputReference | PaloAltoLocalRulestackRuleCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    feeds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.feeds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoLocalRulestackRuleCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoLocalRulestackRuleCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUrls = this._customUrls;
    }
    if (this._feeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.feeds = this._feeds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoLocalRulestackRuleCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customUrls = undefined;
      this._feeds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customUrls = value.customUrls;
      this._feeds = value.feeds;
    }
  }

  // custom_urls - computed: false, optional: false, required: true
  private _customUrls?: string[]; 
  public get customUrls() {
    return this.getListAttribute('custom_urls');
  }
  public set customUrls(value: string[]) {
    this._customUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customUrlsInput() {
    return this._customUrls;
  }

  // feeds - computed: false, optional: true, required: false
  private _feeds?: string[]; 
  public get feeds() {
    return this.getListAttribute('feeds');
  }
  public set feeds(value: string[]) {
    this._feeds = value;
  }
  public resetFeeds() {
    this._feeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedsInput() {
    return this._feeds;
  }
}
export interface PaloAltoLocalRulestackRuleDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}
  */
  readonly countries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}
  */
  readonly feeds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_fqdn_list_ids PaloAltoLocalRulestackRule#local_rulestack_fqdn_list_ids}
  */
  readonly localRulestackFqdnListIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}
  */
  readonly localRulestackPrefixListIds?: string[];
}

export function paloAltoLocalRulestackRuleDestinationToTerraform(struct?: PaloAltoLocalRulestackRuleDestinationOutputReference | PaloAltoLocalRulestackRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    feeds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.feeds),
    local_rulestack_fqdn_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localRulestackFqdnListIds),
    local_rulestack_prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localRulestackPrefixListIds),
  }
}


export function paloAltoLocalRulestackRuleDestinationToHclTerraform(struct?: PaloAltoLocalRulestackRuleDestinationOutputReference | PaloAltoLocalRulestackRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    feeds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.feeds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    local_rulestack_fqdn_list_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localRulestackFqdnListIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    local_rulestack_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localRulestackPrefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoLocalRulestackRuleDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoLocalRulestackRuleDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._feeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.feeds = this._feeds;
    }
    if (this._localRulestackFqdnListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRulestackFqdnListIds = this._localRulestackFqdnListIds;
    }
    if (this._localRulestackPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRulestackPrefixListIds = this._localRulestackPrefixListIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoLocalRulestackRuleDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrs = undefined;
      this._countries = undefined;
      this._feeds = undefined;
      this._localRulestackFqdnListIds = undefined;
      this._localRulestackPrefixListIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrs = value.cidrs;
      this._countries = value.countries;
      this._feeds = value.feeds;
      this._localRulestackFqdnListIds = value.localRulestackFqdnListIds;
      this._localRulestackPrefixListIds = value.localRulestackPrefixListIds;
    }
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // feeds - computed: false, optional: true, required: false
  private _feeds?: string[]; 
  public get feeds() {
    return this.getListAttribute('feeds');
  }
  public set feeds(value: string[]) {
    this._feeds = value;
  }
  public resetFeeds() {
    this._feeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedsInput() {
    return this._feeds;
  }

  // local_rulestack_fqdn_list_ids - computed: false, optional: true, required: false
  private _localRulestackFqdnListIds?: string[]; 
  public get localRulestackFqdnListIds() {
    return this.getListAttribute('local_rulestack_fqdn_list_ids');
  }
  public set localRulestackFqdnListIds(value: string[]) {
    this._localRulestackFqdnListIds = value;
  }
  public resetLocalRulestackFqdnListIds() {
    this._localRulestackFqdnListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRulestackFqdnListIdsInput() {
    return this._localRulestackFqdnListIds;
  }

  // local_rulestack_prefix_list_ids - computed: false, optional: true, required: false
  private _localRulestackPrefixListIds?: string[]; 
  public get localRulestackPrefixListIds() {
    return this.getListAttribute('local_rulestack_prefix_list_ids');
  }
  public set localRulestackPrefixListIds(value: string[]) {
    this._localRulestackPrefixListIds = value;
  }
  public resetLocalRulestackPrefixListIds() {
    this._localRulestackPrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRulestackPrefixListIdsInput() {
    return this._localRulestackPrefixListIds;
  }
}
export interface PaloAltoLocalRulestackRuleSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}
  */
  readonly countries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}
  */
  readonly feeds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}
  */
  readonly localRulestackPrefixListIds?: string[];
}

export function paloAltoLocalRulestackRuleSourceToTerraform(struct?: PaloAltoLocalRulestackRuleSourceOutputReference | PaloAltoLocalRulestackRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    feeds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.feeds),
    local_rulestack_prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localRulestackPrefixListIds),
  }
}


export function paloAltoLocalRulestackRuleSourceToHclTerraform(struct?: PaloAltoLocalRulestackRuleSourceOutputReference | PaloAltoLocalRulestackRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    feeds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.feeds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    local_rulestack_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localRulestackPrefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoLocalRulestackRuleSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoLocalRulestackRuleSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._feeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.feeds = this._feeds;
    }
    if (this._localRulestackPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRulestackPrefixListIds = this._localRulestackPrefixListIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoLocalRulestackRuleSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrs = undefined;
      this._countries = undefined;
      this._feeds = undefined;
      this._localRulestackPrefixListIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrs = value.cidrs;
      this._countries = value.countries;
      this._feeds = value.feeds;
      this._localRulestackPrefixListIds = value.localRulestackPrefixListIds;
    }
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // feeds - computed: false, optional: true, required: false
  private _feeds?: string[]; 
  public get feeds() {
    return this.getListAttribute('feeds');
  }
  public set feeds(value: string[]) {
    this._feeds = value;
  }
  public resetFeeds() {
    this._feeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedsInput() {
    return this._feeds;
  }

  // local_rulestack_prefix_list_ids - computed: false, optional: true, required: false
  private _localRulestackPrefixListIds?: string[]; 
  public get localRulestackPrefixListIds() {
    return this.getListAttribute('local_rulestack_prefix_list_ids');
  }
  public set localRulestackPrefixListIds(value: string[]) {
    this._localRulestackPrefixListIds = value;
  }
  public resetLocalRulestackPrefixListIds() {
    this._localRulestackPrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRulestackPrefixListIdsInput() {
    return this._localRulestackPrefixListIds;
  }
}
export interface PaloAltoLocalRulestackRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#create PaloAltoLocalRulestackRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#delete PaloAltoLocalRulestackRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#read PaloAltoLocalRulestackRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#update PaloAltoLocalRulestackRule#update}
  */
  readonly update?: string;
}

export function paloAltoLocalRulestackRuleTimeoutsToTerraform(struct?: PaloAltoLocalRulestackRuleTimeouts | cdktf.IResolvable): any {
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


export function paloAltoLocalRulestackRuleTimeoutsToHclTerraform(struct?: PaloAltoLocalRulestackRuleTimeouts | cdktf.IResolvable): any {
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

export class PaloAltoLocalRulestackRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaloAltoLocalRulestackRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PaloAltoLocalRulestackRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule azurerm_palo_alto_local_rulestack_rule}
*/
export class PaloAltoLocalRulestackRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_palo_alto_local_rulestack_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PaloAltoLocalRulestackRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PaloAltoLocalRulestackRule to import
  * @param importFromId The id of the existing PaloAltoLocalRulestackRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PaloAltoLocalRulestackRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_palo_alto_local_rulestack_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_local_rulestack_rule azurerm_palo_alto_local_rulestack_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PaloAltoLocalRulestackRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PaloAltoLocalRulestackRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_palo_alto_local_rulestack_rule',
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
    this._action = config.action;
    this._applications = config.applications;
    this._auditComment = config.auditComment;
    this._decryptionRuleType = config.decryptionRuleType;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._inspectionCertificateId = config.inspectionCertificateId;
    this._loggingEnabled = config.loggingEnabled;
    this._name = config.name;
    this._negateDestination = config.negateDestination;
    this._negateSource = config.negateSource;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._protocolPorts = config.protocolPorts;
    this._rulestackId = config.rulestackId;
    this._tags = config.tags;
    this._category.internalValue = config.category;
    this._destination.internalValue = config.destination;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // applications - computed: false, optional: false, required: true
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // audit_comment - computed: false, optional: true, required: false
  private _auditComment?: string; 
  public get auditComment() {
    return this.getStringAttribute('audit_comment');
  }
  public set auditComment(value: string) {
    this._auditComment = value;
  }
  public resetAuditComment() {
    this._auditComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditCommentInput() {
    return this._auditComment;
  }

  // decryption_rule_type - computed: false, optional: true, required: false
  private _decryptionRuleType?: string; 
  public get decryptionRuleType() {
    return this.getStringAttribute('decryption_rule_type');
  }
  public set decryptionRuleType(value: string) {
    this._decryptionRuleType = value;
  }
  public resetDecryptionRuleType() {
    this._decryptionRuleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionRuleTypeInput() {
    return this._decryptionRuleType;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // inspection_certificate_id - computed: false, optional: true, required: false
  private _inspectionCertificateId?: string; 
  public get inspectionCertificateId() {
    return this.getStringAttribute('inspection_certificate_id');
  }
  public set inspectionCertificateId(value: string) {
    this._inspectionCertificateId = value;
  }
  public resetInspectionCertificateId() {
    this._inspectionCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionCertificateIdInput() {
    return this._inspectionCertificateId;
  }

  // logging_enabled - computed: false, optional: true, required: false
  private _loggingEnabled?: boolean | cdktf.IResolvable; 
  public get loggingEnabled() {
    return this.getBooleanAttribute('logging_enabled');
  }
  public set loggingEnabled(value: boolean | cdktf.IResolvable) {
    this._loggingEnabled = value;
  }
  public resetLoggingEnabled() {
    this._loggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEnabledInput() {
    return this._loggingEnabled;
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

  // negate_destination - computed: false, optional: true, required: false
  private _negateDestination?: boolean | cdktf.IResolvable; 
  public get negateDestination() {
    return this.getBooleanAttribute('negate_destination');
  }
  public set negateDestination(value: boolean | cdktf.IResolvable) {
    this._negateDestination = value;
  }
  public resetNegateDestination() {
    this._negateDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateDestinationInput() {
    return this._negateDestination;
  }

  // negate_source - computed: false, optional: true, required: false
  private _negateSource?: boolean | cdktf.IResolvable; 
  public get negateSource() {
    return this.getBooleanAttribute('negate_source');
  }
  public set negateSource(value: boolean | cdktf.IResolvable) {
    this._negateSource = value;
  }
  public resetNegateSource() {
    this._negateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateSourceInput() {
    return this._negateSource;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_ports - computed: false, optional: true, required: false
  private _protocolPorts?: string[]; 
  public get protocolPorts() {
    return this.getListAttribute('protocol_ports');
  }
  public set protocolPorts(value: string[]) {
    this._protocolPorts = value;
  }
  public resetProtocolPorts() {
    this._protocolPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortsInput() {
    return this._protocolPorts;
  }

  // rulestack_id - computed: false, optional: false, required: true
  private _rulestackId?: string; 
  public get rulestackId() {
    return this.getStringAttribute('rulestack_id');
  }
  public set rulestackId(value: string) {
    this._rulestackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulestackIdInput() {
    return this._rulestackId;
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

  // category - computed: false, optional: true, required: false
  private _category = new PaloAltoLocalRulestackRuleCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: PaloAltoLocalRulestackRuleCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new PaloAltoLocalRulestackRuleDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: PaloAltoLocalRulestackRuleDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new PaloAltoLocalRulestackRuleSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: PaloAltoLocalRulestackRuleSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PaloAltoLocalRulestackRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PaloAltoLocalRulestackRuleTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      audit_comment: cdktf.stringToTerraform(this._auditComment),
      decryption_rule_type: cdktf.stringToTerraform(this._decryptionRuleType),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      inspection_certificate_id: cdktf.stringToTerraform(this._inspectionCertificateId),
      logging_enabled: cdktf.booleanToTerraform(this._loggingEnabled),
      name: cdktf.stringToTerraform(this._name),
      negate_destination: cdktf.booleanToTerraform(this._negateDestination),
      negate_source: cdktf.booleanToTerraform(this._negateSource),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocolPorts),
      rulestack_id: cdktf.stringToTerraform(this._rulestackId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      category: paloAltoLocalRulestackRuleCategoryToTerraform(this._category.internalValue),
      destination: paloAltoLocalRulestackRuleDestinationToTerraform(this._destination.internalValue),
      source: paloAltoLocalRulestackRuleSourceToTerraform(this._source.internalValue),
      timeouts: paloAltoLocalRulestackRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      audit_comment: {
        value: cdktf.stringToHclTerraform(this._auditComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decryption_rule_type: {
        value: cdktf.stringToHclTerraform(this._decryptionRuleType),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspection_certificate_id: {
        value: cdktf.stringToHclTerraform(this._inspectionCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._loggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negate_destination: {
        value: cdktf.booleanToHclTerraform(this._negateDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      negate_source: {
        value: cdktf.booleanToHclTerraform(this._negateSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocolPorts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rulestack_id: {
        value: cdktf.stringToHclTerraform(this._rulestackId),
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
      category: {
        value: paloAltoLocalRulestackRuleCategoryToHclTerraform(this._category.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaloAltoLocalRulestackRuleCategoryList",
      },
      destination: {
        value: paloAltoLocalRulestackRuleDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaloAltoLocalRulestackRuleDestinationList",
      },
      source: {
        value: paloAltoLocalRulestackRuleSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaloAltoLocalRulestackRuleSourceList",
      },
      timeouts: {
        value: paloAltoLocalRulestackRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PaloAltoLocalRulestackRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

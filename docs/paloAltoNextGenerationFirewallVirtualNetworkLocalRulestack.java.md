# `paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack` Submodule <a name="`paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack` Submodule" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack azurerm_palo_alto_next_generation_firewall_virtual_network_local_rulestack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkProfile(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile)
    .resourceGroupName(java.lang.String)
    .rulestackId(java.lang.String)
//  .destinationNat(IResolvable)
//  .destinationNat(java.util.List<PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat>)
//  .dnsSettings(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#name PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#resource_group_name PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.rulestackId">rulestackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#rulestack_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.destinationNat">destinationNat</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a>></code> | destination_nat block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#tags PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#tags}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#name PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#name}.

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.networkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#network_profile PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#network_profile}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#resource_group_name PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#resource_group_name}.

---

##### `rulestackId`<sup>Required</sup> <a name="rulestackId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.rulestackId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#rulestack_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#rulestack_id}.

---

##### `destinationNat`<sup>Optional</sup> <a name="destinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.destinationNat"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a>>

destination_nat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#destination_nat PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#destination_nat}

---

##### `dnsSettings`<sup>Optional</sup> <a name="dnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.dnsSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#dns_settings PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#dns_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#tags PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#timeouts PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putDestinationNat">putDestinationNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putDnsSettings">putDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putNetworkProfile">putNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetDestinationNat">resetDestinationNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetDnsSettings">resetDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationNat` <a name="putDestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putDestinationNat"></a>

```java
public void putDestinationNat(IResolvable OR java.util.List<PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putDestinationNat.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a>>

---

##### `putDnsSettings` <a name="putDnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putDnsSettings"></a>

```java
public void putDnsSettings(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putDnsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings</a>

---

##### `putNetworkProfile` <a name="putNetworkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putNetworkProfile"></a>

```java
public void putNetworkProfile(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putTimeouts"></a>

```java
public void putTimeouts(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts</a>

---

##### `resetDestinationNat` <a name="resetDestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetDestinationNat"></a>

```java
public void resetDestinationNat()
```

##### `resetDnsSettings` <a name="resetDnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetDnsSettings"></a>

```java
public void resetDnsSettings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.destinationNat">destinationNat</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.destinationNatInput">destinationNatInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.dnsSettingsInput">dnsSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.networkProfileInput">networkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.rulestackIdInput">rulestackIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.rulestackId">rulestackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destinationNat`<sup>Required</sup> <a name="destinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.destinationNat"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList getDestinationNat();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList</a>

---

##### `dnsSettings`<sup>Required</sup> <a name="dnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.dnsSettings"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference getDnsSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference</a>

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.networkProfile"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference getNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.timeouts"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference</a>

---

##### `destinationNatInput`<sup>Optional</sup> <a name="destinationNatInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.destinationNatInput"></a>

```java
public java.lang.Object getDestinationNatInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a>>

---

##### `dnsSettingsInput`<sup>Optional</sup> <a name="dnsSettingsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.dnsSettingsInput"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings getDnsSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkProfileInput`<sup>Optional</sup> <a name="networkProfileInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.networkProfileInput"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile getNetworkProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `rulestackIdInput`<sup>Optional</sup> <a name="rulestackIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.rulestackIdInput"></a>

```java
public java.lang.String getRulestackIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `rulestackId`<sup>Required</sup> <a name="rulestackId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.rulestackId"></a>

```java
public java.lang.String getRulestackId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkProfile(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile)
    .resourceGroupName(java.lang.String)
    .rulestackId(java.lang.String)
//  .destinationNat(IResolvable)
//  .destinationNat(java.util.List<PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat>)
//  .dnsSettings(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#name PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#resource_group_name PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.rulestackId">rulestackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#rulestack_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.destinationNat">destinationNat</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a>></code> | destination_nat block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#tags PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#tags}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#name PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#name}.

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.networkProfile"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile getNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#network_profile PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#network_profile}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#resource_group_name PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#resource_group_name}.

---

##### `rulestackId`<sup>Required</sup> <a name="rulestackId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.rulestackId"></a>

```java
public java.lang.String getRulestackId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#rulestack_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#rulestack_id}.

---

##### `destinationNat`<sup>Optional</sup> <a name="destinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.destinationNat"></a>

```java
public java.lang.Object getDestinationNat();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a>>

destination_nat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#destination_nat PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#destination_nat}

---

##### `dnsSettings`<sup>Optional</sup> <a name="dnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.dnsSettings"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings getDnsSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#dns_settings PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#dns_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#tags PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackConfig.property.timeouts"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#timeouts PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#timeouts}

---

### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat.builder()
    .name(java.lang.String)
    .protocol(java.lang.String)
//  .backendConfig(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig)
//  .frontendConfig(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#name PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#protocol PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat.property.backendConfig">backendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig</a></code> | backend_config block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat.property.frontendConfig">frontendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig</a></code> | frontend_config block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#name PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#protocol PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#protocol}.

---

##### `backendConfig`<sup>Optional</sup> <a name="backendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat.property.backendConfig"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig getBackendConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig</a>

backend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#backend_config PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#backend_config}

---

##### `frontendConfig`<sup>Optional</sup> <a name="frontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat.property.frontendConfig"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig getFrontendConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig</a>

frontend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#frontend_config PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#frontend_config}

---

### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig.builder()
    .port(java.lang.Number)
    .publicIpAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#port PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#port}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#public_ip_address PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#public_ip_address}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#port PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#port}.

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#public_ip_address PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#public_ip_address}.

---

### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig.builder()
    .port(java.lang.Number)
    .publicIpAddressId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#port PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#port}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#public_ip_address_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#public_ip_address_id}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#port PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#port}.

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#public_ip_address_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#public_ip_address_id}.

---

### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings.builder()
//  .dnsServers(java.util.List<java.lang.String>)
//  .useAzureDns(java.lang.Boolean)
//  .useAzureDns(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#dns_servers PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings.property.useAzureDns">useAzureDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#use_azure_dns PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#use_azure_dns}. |

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#dns_servers PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#dns_servers}.

---

##### `useAzureDns`<sup>Optional</sup> <a name="useAzureDns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings.property.useAzureDns"></a>

```java
public java.lang.Object getUseAzureDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#use_azure_dns PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#use_azure_dns}.

---

### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile.builder()
    .publicIpAddressIds(java.util.List<java.lang.String>)
    .vnetConfiguration(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration)
//  .egressNatIpAddressIds(java.util.List<java.lang.String>)
//  .trustedAddressRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile.property.publicIpAddressIds">publicIpAddressIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#public_ip_address_ids}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile.property.vnetConfiguration">vnetConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration</a></code> | vnet_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile.property.egressNatIpAddressIds">egressNatIpAddressIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#egress_nat_ip_address_ids}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile.property.trustedAddressRanges">trustedAddressRanges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#trusted_address_ranges}. |

---

##### `publicIpAddressIds`<sup>Required</sup> <a name="publicIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile.property.publicIpAddressIds"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddressIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#public_ip_address_ids}.

---

##### `vnetConfiguration`<sup>Required</sup> <a name="vnetConfiguration" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile.property.vnetConfiguration"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration getVnetConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration</a>

vnet_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#vnet_configuration PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#vnet_configuration}

---

##### `egressNatIpAddressIds`<sup>Optional</sup> <a name="egressNatIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile.property.egressNatIpAddressIds"></a>

```java
public java.util.List<java.lang.String> getEgressNatIpAddressIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#egress_nat_ip_address_ids}.

---

##### `trustedAddressRanges`<sup>Optional</sup> <a name="trustedAddressRanges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile.property.trustedAddressRanges"></a>

```java
public java.util.List<java.lang.String> getTrustedAddressRanges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#trusted_address_ranges}.

---

### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration.builder()
    .virtualNetworkId(java.lang.String)
//  .trustedSubnetId(java.lang.String)
//  .untrustedSubnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#virtual_network_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration.property.trustedSubnetId">trustedSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#trusted_subnet_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#trusted_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration.property.untrustedSubnetId">untrustedSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#untrusted_subnet_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#untrusted_subnet_id}. |

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#virtual_network_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#virtual_network_id}.

---

##### `trustedSubnetId`<sup>Optional</sup> <a name="trustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration.property.trustedSubnetId"></a>

```java
public java.lang.String getTrustedSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#trusted_subnet_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#trusted_subnet_id}.

---

##### `untrustedSubnetId`<sup>Optional</sup> <a name="untrustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration.property.untrustedSubnetId"></a>

```java
public java.lang.String getUntrustedSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#untrusted_subnet_id PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#untrusted_subnet_id}.

---

### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts;

PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#create PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#delete PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#read PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#update PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#create PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#delete PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#read PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_local_rulestack#update PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.publicIpAddressInput">publicIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `publicIpAddressInput`<sup>Optional</sup> <a name="publicIpAddressInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.publicIpAddressInput"></a>

```java
public java.lang.String getPublicIpAddressInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.publicIpAddressIdInput">publicIpAddressIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `publicIpAddressIdInput`<sup>Optional</sup> <a name="publicIpAddressIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.publicIpAddressIdInput"></a>

```java
public java.lang.String getPublicIpAddressIdInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList;

new PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.get"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a>>

---


### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.putBackendConfig">putBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.putFrontendConfig">putFrontendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.resetBackendConfig">resetBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.resetFrontendConfig">resetFrontendConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackendConfig` <a name="putBackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.putBackendConfig"></a>

```java
public void putBackendConfig(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.putBackendConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig</a>

---

##### `putFrontendConfig` <a name="putFrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.putFrontendConfig"></a>

```java
public void putFrontendConfig(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.putFrontendConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig</a>

---

##### `resetBackendConfig` <a name="resetBackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.resetBackendConfig"></a>

```java
public void resetBackendConfig()
```

##### `resetFrontendConfig` <a name="resetFrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.resetFrontendConfig"></a>

```java
public void resetFrontendConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.backendConfig">backendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.frontendConfig">frontendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.backendConfigInput">backendConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.frontendConfigInput">frontendConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendConfig`<sup>Required</sup> <a name="backendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.backendConfig"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference getBackendConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfigOutputReference</a>

---

##### `frontendConfig`<sup>Required</sup> <a name="frontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.frontendConfig"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference getFrontendConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfigOutputReference</a>

---

##### `backendConfigInput`<sup>Optional</sup> <a name="backendConfigInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.backendConfigInput"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig getBackendConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatBackendConfig</a>

---

##### `frontendConfigInput`<sup>Optional</sup> <a name="frontendConfigInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.frontendConfigInput"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig getFrontendConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatFrontendConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNatOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDestinationNat</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.resetUseAzureDns">resetUseAzureDns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.resetDnsServers"></a>

```java
public void resetDnsServers()
```

##### `resetUseAzureDns` <a name="resetUseAzureDns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.resetUseAzureDns"></a>

```java
public void resetUseAzureDns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.azureDnsServers">azureDnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.dnsServersInput">dnsServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.useAzureDnsInput">useAzureDnsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.useAzureDns">useAzureDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureDnsServers`<sup>Required</sup> <a name="azureDnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.azureDnsServers"></a>

```java
public java.util.List<java.lang.String> getAzureDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.dnsServersInput"></a>

```java
public java.util.List<java.lang.String> getDnsServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useAzureDnsInput`<sup>Optional</sup> <a name="useAzureDnsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.useAzureDnsInput"></a>

```java
public java.lang.Object getUseAzureDnsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useAzureDns`<sup>Required</sup> <a name="useAzureDns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.useAzureDns"></a>

```java
public java.lang.Object getUseAzureDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettingsOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackDnsSettings</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.putVnetConfiguration">putVnetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.resetEgressNatIpAddressIds">resetEgressNatIpAddressIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.resetTrustedAddressRanges">resetTrustedAddressRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVnetConfiguration` <a name="putVnetConfiguration" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.putVnetConfiguration"></a>

```java
public void putVnetConfiguration(PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.putVnetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration</a>

---

##### `resetEgressNatIpAddressIds` <a name="resetEgressNatIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.resetEgressNatIpAddressIds"></a>

```java
public void resetEgressNatIpAddressIds()
```

##### `resetTrustedAddressRanges` <a name="resetTrustedAddressRanges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.resetTrustedAddressRanges"></a>

```java
public void resetTrustedAddressRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddresses">egressNatIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.publicIpAddresses">publicIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.vnetConfiguration">vnetConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddressIdsInput">egressNatIpAddressIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.publicIpAddressIdsInput">publicIpAddressIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.trustedAddressRangesInput">trustedAddressRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.vnetConfigurationInput">vnetConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddressIds">egressNatIpAddressIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.publicIpAddressIds">publicIpAddressIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.trustedAddressRanges">trustedAddressRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressNatIpAddresses`<sup>Required</sup> <a name="egressNatIpAddresses" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddresses"></a>

```java
public java.util.List<java.lang.String> getEgressNatIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.publicIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vnetConfiguration`<sup>Required</sup> <a name="vnetConfiguration" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.vnetConfiguration"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference getVnetConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference</a>

---

##### `egressNatIpAddressIdsInput`<sup>Optional</sup> <a name="egressNatIpAddressIdsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddressIdsInput"></a>

```java
public java.util.List<java.lang.String> getEgressNatIpAddressIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpAddressIdsInput`<sup>Optional</sup> <a name="publicIpAddressIdsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.publicIpAddressIdsInput"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddressIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedAddressRangesInput`<sup>Optional</sup> <a name="trustedAddressRangesInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.trustedAddressRangesInput"></a>

```java
public java.util.List<java.lang.String> getTrustedAddressRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vnetConfigurationInput`<sup>Optional</sup> <a name="vnetConfigurationInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.vnetConfigurationInput"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration getVnetConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration</a>

---

##### `egressNatIpAddressIds`<sup>Required</sup> <a name="egressNatIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddressIds"></a>

```java
public java.util.List<java.lang.String> getEgressNatIpAddressIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpAddressIds`<sup>Required</sup> <a name="publicIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.publicIpAddressIds"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddressIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedAddressRanges`<sup>Required</sup> <a name="trustedAddressRanges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.trustedAddressRanges"></a>

```java
public java.util.List<java.lang.String> getTrustedAddressRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfile</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.resetTrustedSubnetId">resetTrustedSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.resetUntrustedSubnetId">resetUntrustedSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrustedSubnetId` <a name="resetTrustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.resetTrustedSubnetId"></a>

```java
public void resetTrustedSubnetId()
```

##### `resetUntrustedSubnetId` <a name="resetUntrustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.resetUntrustedSubnetId"></a>

```java
public void resetUntrustedSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.ipOfTrustForUserDefinedRoutes">ipOfTrustForUserDefinedRoutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.trustedSubnetIdInput">trustedSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.untrustedSubnetIdInput">untrustedSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.trustedSubnetId">trustedSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.untrustedSubnetId">untrustedSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipOfTrustForUserDefinedRoutes`<sup>Required</sup> <a name="ipOfTrustForUserDefinedRoutes" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.ipOfTrustForUserDefinedRoutes"></a>

```java
public java.lang.String getIpOfTrustForUserDefinedRoutes();
```

- *Type:* java.lang.String

---

##### `trustedSubnetIdInput`<sup>Optional</sup> <a name="trustedSubnetIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.trustedSubnetIdInput"></a>

```java
public java.lang.String getTrustedSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `untrustedSubnetIdInput`<sup>Optional</sup> <a name="untrustedSubnetIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.untrustedSubnetIdInput"></a>

```java
public java.lang.String getUntrustedSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `trustedSubnetId`<sup>Required</sup> <a name="trustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.trustedSubnetId"></a>

```java
public java.lang.String getTrustedSubnetId();
```

- *Type:* java.lang.String

---

##### `untrustedSubnetId`<sup>Required</sup> <a name="untrustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.untrustedSubnetId"></a>

```java
public java.lang.String getUntrustedSubnetId();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfigurationOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackNetworkProfileVnetConfiguration</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_local_rulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkLocalRulestack.PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkLocalRulestackTimeouts</a>

---




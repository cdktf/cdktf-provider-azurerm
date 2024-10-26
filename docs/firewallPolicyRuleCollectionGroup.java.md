# `firewallPolicyRuleCollectionGroup` Submodule <a name="`firewallPolicyRuleCollectionGroup` Submodule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallPolicyRuleCollectionGroup <a name="FirewallPolicyRuleCollectionGroup" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group azurerm_firewall_policy_rule_collection_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroup;

FirewallPolicyRuleCollectionGroup.Builder.create(Construct scope, java.lang.String id)
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
    .firewallPolicyId(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
//  .applicationRuleCollection(IResolvable)
//  .applicationRuleCollection(java.util.List<FirewallPolicyRuleCollectionGroupApplicationRuleCollection>)
//  .id(java.lang.String)
//  .natRuleCollection(IResolvable)
//  .natRuleCollection(java.util.List<FirewallPolicyRuleCollectionGroupNatRuleCollection>)
//  .networkRuleCollection(IResolvable)
//  .networkRuleCollection(java.util.List<FirewallPolicyRuleCollectionGroupNetworkRuleCollection>)
//  .timeouts(FirewallPolicyRuleCollectionGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.firewallPolicyId">firewallPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#firewall_policy_id FirewallPolicyRuleCollectionGroup#firewall_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.applicationRuleCollection">applicationRuleCollection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>></code> | application_rule_collection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#id FirewallPolicyRuleCollectionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.natRuleCollection">natRuleCollection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>></code> | nat_rule_collection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.networkRuleCollection">networkRuleCollection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>></code> | network_rule_collection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firewallPolicyId`<sup>Required</sup> <a name="firewallPolicyId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.firewallPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#firewall_policy_id FirewallPolicyRuleCollectionGroup#firewall_policy_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}.

---

##### `applicationRuleCollection`<sup>Optional</sup> <a name="applicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.applicationRuleCollection"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>>

application_rule_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#application_rule_collection FirewallPolicyRuleCollectionGroup#application_rule_collection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#id FirewallPolicyRuleCollectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `natRuleCollection`<sup>Optional</sup> <a name="natRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.natRuleCollection"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>>

nat_rule_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#nat_rule_collection FirewallPolicyRuleCollectionGroup#nat_rule_collection}

---

##### `networkRuleCollection`<sup>Optional</sup> <a name="networkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.networkRuleCollection"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>>

network_rule_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#network_rule_collection FirewallPolicyRuleCollectionGroup#network_rule_collection}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#timeouts FirewallPolicyRuleCollectionGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putApplicationRuleCollection">putApplicationRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNatRuleCollection">putNatRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNetworkRuleCollection">putNetworkRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetApplicationRuleCollection">resetApplicationRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetNatRuleCollection">resetNatRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetNetworkRuleCollection">resetNetworkRuleCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationRuleCollection` <a name="putApplicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putApplicationRuleCollection"></a>

```java
public void putApplicationRuleCollection(IResolvable OR java.util.List<FirewallPolicyRuleCollectionGroupApplicationRuleCollection> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putApplicationRuleCollection.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>>

---

##### `putNatRuleCollection` <a name="putNatRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNatRuleCollection"></a>

```java
public void putNatRuleCollection(IResolvable OR java.util.List<FirewallPolicyRuleCollectionGroupNatRuleCollection> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNatRuleCollection.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>>

---

##### `putNetworkRuleCollection` <a name="putNetworkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNetworkRuleCollection"></a>

```java
public void putNetworkRuleCollection(IResolvable OR java.util.List<FirewallPolicyRuleCollectionGroupNetworkRuleCollection> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putNetworkRuleCollection.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putTimeouts"></a>

```java
public void putTimeouts(FirewallPolicyRuleCollectionGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a>

---

##### `resetApplicationRuleCollection` <a name="resetApplicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetApplicationRuleCollection"></a>

```java
public void resetApplicationRuleCollection()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetId"></a>

```java
public void resetId()
```

##### `resetNatRuleCollection` <a name="resetNatRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetNatRuleCollection"></a>

```java
public void resetNatRuleCollection()
```

##### `resetNetworkRuleCollection` <a name="resetNetworkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetNetworkRuleCollection"></a>

```java
public void resetNetworkRuleCollection()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallPolicyRuleCollectionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroup;

FirewallPolicyRuleCollectionGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroup;

FirewallPolicyRuleCollectionGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroup;

FirewallPolicyRuleCollectionGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroup;

FirewallPolicyRuleCollectionGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FirewallPolicyRuleCollectionGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FirewallPolicyRuleCollectionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FirewallPolicyRuleCollectionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FirewallPolicyRuleCollectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FirewallPolicyRuleCollectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.applicationRuleCollection">applicationRuleCollection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.natRuleCollection">natRuleCollection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList">FirewallPolicyRuleCollectionGroupNatRuleCollectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.networkRuleCollection">networkRuleCollection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference">FirewallPolicyRuleCollectionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.applicationRuleCollectionInput">applicationRuleCollectionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.firewallPolicyIdInput">firewallPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.natRuleCollectionInput">natRuleCollectionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.networkRuleCollectionInput">networkRuleCollectionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.firewallPolicyId">firewallPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationRuleCollection`<sup>Required</sup> <a name="applicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.applicationRuleCollection"></a>

```java
public FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList getApplicationRuleCollection();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList</a>

---

##### `natRuleCollection`<sup>Required</sup> <a name="natRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.natRuleCollection"></a>

```java
public FirewallPolicyRuleCollectionGroupNatRuleCollectionList getNatRuleCollection();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList">FirewallPolicyRuleCollectionGroupNatRuleCollectionList</a>

---

##### `networkRuleCollection`<sup>Required</sup> <a name="networkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.networkRuleCollection"></a>

```java
public FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList getNetworkRuleCollection();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.timeouts"></a>

```java
public FirewallPolicyRuleCollectionGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference">FirewallPolicyRuleCollectionGroupTimeoutsOutputReference</a>

---

##### `applicationRuleCollectionInput`<sup>Optional</sup> <a name="applicationRuleCollectionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.applicationRuleCollectionInput"></a>

```java
public java.lang.Object getApplicationRuleCollectionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>>

---

##### `firewallPolicyIdInput`<sup>Optional</sup> <a name="firewallPolicyIdInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.firewallPolicyIdInput"></a>

```java
public java.lang.String getFirewallPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `natRuleCollectionInput`<sup>Optional</sup> <a name="natRuleCollectionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.natRuleCollectionInput"></a>

```java
public java.lang.Object getNatRuleCollectionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>>

---

##### `networkRuleCollectionInput`<sup>Optional</sup> <a name="networkRuleCollectionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.networkRuleCollectionInput"></a>

```java
public java.lang.Object getNetworkRuleCollectionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a>

---

##### `firewallPolicyId`<sup>Required</sup> <a name="firewallPolicyId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.firewallPolicyId"></a>

```java
public java.lang.String getFirewallPolicyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallPolicyRuleCollectionGroupApplicationRuleCollection <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollection;

FirewallPolicyRuleCollectionGroupApplicationRuleCollection.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .rule(IResolvable)
    .rule(java.util.List<FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>></code> | rule block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#rule FirewallPolicyRuleCollectionGroup#rule}

---

### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule;

FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.builder()
    .name(java.lang.String)
//  .description(java.lang.String)
//  .destinationAddresses(java.util.List<java.lang.String>)
//  .destinationFqdns(java.util.List<java.lang.String>)
//  .destinationFqdnTags(java.util.List<java.lang.String>)
//  .destinationUrls(java.util.List<java.lang.String>)
//  .httpHeaders(IResolvable)
//  .httpHeaders(java.util.List<FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders>)
//  .protocols(IResolvable)
//  .protocols(java.util.List<FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols>)
//  .sourceAddresses(java.util.List<java.lang.String>)
//  .sourceIpGroups(java.util.List<java.lang.String>)
//  .terminateTls(java.lang.Boolean)
//  .terminateTls(IResolvable)
//  .webCategories(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationFqdns">destinationFqdns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationFqdnTags">destinationFqdnTags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdn_tags FirewallPolicyRuleCollectionGroup#destination_fqdn_tags}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationUrls">destinationUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_urls FirewallPolicyRuleCollectionGroup#destination_urls}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.httpHeaders">httpHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>></code> | http_headers block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.protocols">protocols</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>></code> | protocols block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.sourceIpGroups">sourceIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.terminateTls">terminateTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#terminate_tls FirewallPolicyRuleCollectionGroup#terminate_tls}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.webCategories">webCategories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#web_categories FirewallPolicyRuleCollectionGroup#web_categories}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}.

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}.

---

##### `destinationFqdns`<sup>Optional</sup> <a name="destinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationFqdns"></a>

```java
public java.util.List<java.lang.String> getDestinationFqdns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}.

---

##### `destinationFqdnTags`<sup>Optional</sup> <a name="destinationFqdnTags" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationFqdnTags"></a>

```java
public java.util.List<java.lang.String> getDestinationFqdnTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdn_tags FirewallPolicyRuleCollectionGroup#destination_fqdn_tags}.

---

##### `destinationUrls`<sup>Optional</sup> <a name="destinationUrls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.destinationUrls"></a>

```java
public java.util.List<java.lang.String> getDestinationUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_urls FirewallPolicyRuleCollectionGroup#destination_urls}.

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.httpHeaders"></a>

```java
public java.lang.Object getHttpHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>>

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#http_headers FirewallPolicyRuleCollectionGroup#http_headers}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.protocols"></a>

```java
public java.lang.Object getProtocols();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>>

protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}.

---

##### `sourceIpGroups`<sup>Optional</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.sourceIpGroups"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}.

---

##### `terminateTls`<sup>Optional</sup> <a name="terminateTls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.terminateTls"></a>

```java
public java.lang.Object getTerminateTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#terminate_tls FirewallPolicyRuleCollectionGroup#terminate_tls}.

---

##### `webCategories`<sup>Optional</sup> <a name="webCategories" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule.property.webCategories"></a>

```java
public java.util.List<java.lang.String> getWebCategories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#web_categories FirewallPolicyRuleCollectionGroup#web_categories}.

---

### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders;

FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#value FirewallPolicyRuleCollectionGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#value FirewallPolicyRuleCollectionGroup#value}.

---

### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols;

FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.builder()
    .port(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#port FirewallPolicyRuleCollectionGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#type FirewallPolicyRuleCollectionGroup#type}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#port FirewallPolicyRuleCollectionGroup#port}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#type FirewallPolicyRuleCollectionGroup#type}.

---

### FirewallPolicyRuleCollectionGroupConfig <a name="FirewallPolicyRuleCollectionGroupConfig" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupConfig;

FirewallPolicyRuleCollectionGroupConfig.builder()
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
    .firewallPolicyId(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
//  .applicationRuleCollection(IResolvable)
//  .applicationRuleCollection(java.util.List<FirewallPolicyRuleCollectionGroupApplicationRuleCollection>)
//  .id(java.lang.String)
//  .natRuleCollection(IResolvable)
//  .natRuleCollection(java.util.List<FirewallPolicyRuleCollectionGroupNatRuleCollection>)
//  .networkRuleCollection(IResolvable)
//  .networkRuleCollection(java.util.List<FirewallPolicyRuleCollectionGroupNetworkRuleCollection>)
//  .timeouts(FirewallPolicyRuleCollectionGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.firewallPolicyId">firewallPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#firewall_policy_id FirewallPolicyRuleCollectionGroup#firewall_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.applicationRuleCollection">applicationRuleCollection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>></code> | application_rule_collection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#id FirewallPolicyRuleCollectionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.natRuleCollection">natRuleCollection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>></code> | nat_rule_collection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.networkRuleCollection">networkRuleCollection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>></code> | network_rule_collection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firewallPolicyId`<sup>Required</sup> <a name="firewallPolicyId" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.firewallPolicyId"></a>

```java
public java.lang.String getFirewallPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#firewall_policy_id FirewallPolicyRuleCollectionGroup#firewall_policy_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}.

---

##### `applicationRuleCollection`<sup>Optional</sup> <a name="applicationRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.applicationRuleCollection"></a>

```java
public java.lang.Object getApplicationRuleCollection();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>>

application_rule_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#application_rule_collection FirewallPolicyRuleCollectionGroup#application_rule_collection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#id FirewallPolicyRuleCollectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `natRuleCollection`<sup>Optional</sup> <a name="natRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.natRuleCollection"></a>

```java
public java.lang.Object getNatRuleCollection();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>>

nat_rule_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#nat_rule_collection FirewallPolicyRuleCollectionGroup#nat_rule_collection}

---

##### `networkRuleCollection`<sup>Optional</sup> <a name="networkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.networkRuleCollection"></a>

```java
public java.lang.Object getNetworkRuleCollection();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>>

network_rule_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#network_rule_collection FirewallPolicyRuleCollectionGroup#network_rule_collection}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupConfig.property.timeouts"></a>

```java
public FirewallPolicyRuleCollectionGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#timeouts FirewallPolicyRuleCollectionGroup#timeouts}

---

### FirewallPolicyRuleCollectionGroupNatRuleCollection <a name="FirewallPolicyRuleCollectionGroupNatRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNatRuleCollection;

FirewallPolicyRuleCollectionGroupNatRuleCollection.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .rule(IResolvable)
    .rule(java.util.List<FirewallPolicyRuleCollectionGroupNatRuleCollectionRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>></code> | rule block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#rule FirewallPolicyRuleCollectionGroup#rule}

---

### FirewallPolicyRuleCollectionGroupNatRuleCollectionRule <a name="FirewallPolicyRuleCollectionGroupNatRuleCollectionRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule;

FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.builder()
    .name(java.lang.String)
    .protocols(java.util.List<java.lang.String>)
    .translatedPort(java.lang.Number)
//  .description(java.lang.String)
//  .destinationAddress(java.lang.String)
//  .destinationPorts(java.util.List<java.lang.String>)
//  .sourceAddresses(java.util.List<java.lang.String>)
//  .sourceIpGroups(java.util.List<java.lang.String>)
//  .translatedAddress(java.lang.String)
//  .translatedFqdn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedPort">translatedPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#translated_port FirewallPolicyRuleCollectionGroup#translated_port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_address FirewallPolicyRuleCollectionGroup#destination_address}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.sourceIpGroups">sourceIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedAddress">translatedAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#translated_address FirewallPolicyRuleCollectionGroup#translated_address}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedFqdn">translatedFqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#translated_fqdn FirewallPolicyRuleCollectionGroup#translated_fqdn}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}.

---

##### `translatedPort`<sup>Required</sup> <a name="translatedPort" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedPort"></a>

```java
public java.lang.Number getTranslatedPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#translated_port FirewallPolicyRuleCollectionGroup#translated_port}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}.

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_address FirewallPolicyRuleCollectionGroup#destination_address}.

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}.

---

##### `sourceIpGroups`<sup>Optional</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.sourceIpGroups"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}.

---

##### `translatedAddress`<sup>Optional</sup> <a name="translatedAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedAddress"></a>

```java
public java.lang.String getTranslatedAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#translated_address FirewallPolicyRuleCollectionGroup#translated_address}.

---

##### `translatedFqdn`<sup>Optional</sup> <a name="translatedFqdn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule.property.translatedFqdn"></a>

```java
public java.lang.String getTranslatedFqdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#translated_fqdn FirewallPolicyRuleCollectionGroup#translated_fqdn}.

---

### FirewallPolicyRuleCollectionGroupNetworkRuleCollection <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollection" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNetworkRuleCollection;

FirewallPolicyRuleCollectionGroupNetworkRuleCollection.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .rule(IResolvable)
    .rule(java.util.List<FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>></code> | rule block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#rule FirewallPolicyRuleCollectionGroup#rule}

---

### FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule;

FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.builder()
    .destinationPorts(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .protocols(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .destinationAddresses(java.util.List<java.lang.String>)
//  .destinationFqdns(java.util.List<java.lang.String>)
//  .destinationIpGroups(java.util.List<java.lang.String>)
//  .sourceAddresses(java.util.List<java.lang.String>)
//  .sourceIpGroups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationFqdns">destinationFqdns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationIpGroups">destinationIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_ip_groups FirewallPolicyRuleCollectionGroup#destination_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.sourceIpGroups">sourceIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}. |

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}.

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}.

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}.

---

##### `destinationFqdns`<sup>Optional</sup> <a name="destinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationFqdns"></a>

```java
public java.util.List<java.lang.String> getDestinationFqdns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}.

---

##### `destinationIpGroups`<sup>Optional</sup> <a name="destinationIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.destinationIpGroups"></a>

```java
public java.util.List<java.lang.String> getDestinationIpGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#destination_ip_groups FirewallPolicyRuleCollectionGroup#destination_ip_groups}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}.

---

##### `sourceIpGroups`<sup>Optional</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule.property.sourceIpGroups"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}.

---

### FirewallPolicyRuleCollectionGroupTimeouts <a name="FirewallPolicyRuleCollectionGroupTimeouts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupTimeouts;

FirewallPolicyRuleCollectionGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#create FirewallPolicyRuleCollectionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#delete FirewallPolicyRuleCollectionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#read FirewallPolicyRuleCollectionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#update FirewallPolicyRuleCollectionGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#create FirewallPolicyRuleCollectionGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#delete FirewallPolicyRuleCollectionGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#read FirewallPolicyRuleCollectionGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/firewall_policy_rule_collection_group#update FirewallPolicyRuleCollectionGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList;

new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.get"></a>

```java
public FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>>

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference;

new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.rule"></a>

```java
public FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollection">FirewallPolicyRuleCollectionGroupApplicationRuleCollection</a>

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList;

new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.get"></a>

```java
public FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>>

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference;

new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList;

new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.get"></a>

```java
public FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>>

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference;

new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putProtocols">putProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationFqdns">resetDestinationFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationFqdnTags">resetDestinationFqdnTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationUrls">resetDestinationUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetSourceIpGroups">resetSourceIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetTerminateTls">resetTerminateTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetWebCategories">resetWebCategories</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putHttpHeaders"></a>

```java
public void putHttpHeaders(IResolvable OR java.util.List<FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>>

---

##### `putProtocols` <a name="putProtocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putProtocols"></a>

```java
public void putProtocols(IResolvable OR java.util.List<FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.putProtocols.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationAddresses"></a>

```java
public void resetDestinationAddresses()
```

##### `resetDestinationFqdns` <a name="resetDestinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationFqdns"></a>

```java
public void resetDestinationFqdns()
```

##### `resetDestinationFqdnTags` <a name="resetDestinationFqdnTags" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationFqdnTags"></a>

```java
public void resetDestinationFqdnTags()
```

##### `resetDestinationUrls` <a name="resetDestinationUrls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetDestinationUrls"></a>

```java
public void resetDestinationUrls()
```

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetHttpHeaders"></a>

```java
public void resetHttpHeaders()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```java
public void resetSourceAddresses()
```

##### `resetSourceIpGroups` <a name="resetSourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```java
public void resetSourceIpGroups()
```

##### `resetTerminateTls` <a name="resetTerminateTls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetTerminateTls"></a>

```java
public void resetTerminateTls()
```

##### `resetWebCategories` <a name="resetWebCategories" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.resetWebCategories"></a>

```java
public void resetWebCategories()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.protocols">protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnsInput">destinationFqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnTagsInput">destinationFqdnTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationUrlsInput">destinationUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">sourceIpGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.terminateTlsInput">terminateTlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.webCategoriesInput">webCategoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdns">destinationFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnTags">destinationFqdnTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationUrls">destinationUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceIpGroups">sourceIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.terminateTls">terminateTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.webCategories">webCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.httpHeaders"></a>

```java
public FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList getHttpHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeadersList</a>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.protocols"></a>

```java
public FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList getProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationAddressesInput"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationFqdnsInput`<sup>Optional</sup> <a name="destinationFqdnsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationFqdnTagsInput`<sup>Optional</sup> <a name="destinationFqdnTagsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnTagsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationFqdnTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationUrlsInput`<sup>Optional</sup> <a name="destinationUrlsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationUrlsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.httpHeadersInput"></a>

```java
public java.lang.Object getHttpHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleHttpHeaders</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```java
public java.lang.Object getProtocolsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>>

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```java
public java.util.List<java.lang.String> getSourceAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpGroupsInput`<sup>Optional</sup> <a name="sourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `terminateTlsInput`<sup>Optional</sup> <a name="terminateTlsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.terminateTlsInput"></a>

```java
public java.lang.Object getTerminateTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `webCategoriesInput`<sup>Optional</sup> <a name="webCategoriesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.webCategoriesInput"></a>

```java
public java.util.List<java.lang.String> getWebCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationFqdns`<sup>Required</sup> <a name="destinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdns"></a>

```java
public java.util.List<java.lang.String> getDestinationFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationFqdnTags`<sup>Required</sup> <a name="destinationFqdnTags" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationFqdnTags"></a>

```java
public java.util.List<java.lang.String> getDestinationFqdnTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationUrls`<sup>Required</sup> <a name="destinationUrls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.destinationUrls"></a>

```java
public java.util.List<java.lang.String> getDestinationUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpGroups`<sup>Required</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `terminateTls`<sup>Required</sup> <a name="terminateTls" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.terminateTls"></a>

```java
public java.lang.Object getTerminateTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `webCategories`<sup>Required</sup> <a name="webCategories" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.webCategories"></a>

```java
public java.util.List<java.lang.String> getWebCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule</a>

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList;

new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.get"></a>

```java
public FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>>

---


### FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference <a name="FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference;

new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols">FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols</a>

---


### FirewallPolicyRuleCollectionGroupNatRuleCollectionList <a name="FirewallPolicyRuleCollectionGroupNatRuleCollectionList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNatRuleCollectionList;

new FirewallPolicyRuleCollectionGroupNatRuleCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.get"></a>

```java
public FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>>

---


### FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference <a name="FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference;

new FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<FirewallPolicyRuleCollectionGroupNatRuleCollectionRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.rule"></a>

```java
public FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollection">FirewallPolicyRuleCollectionGroupNatRuleCollection</a>

---


### FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList <a name="FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList;

new FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.get"></a>

```java
public FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>>

---


### FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference <a name="FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference;

new FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDestinationPorts">resetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetSourceIpGroups">resetSourceIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetTranslatedAddress">resetTranslatedAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetTranslatedFqdn">resetTranslatedFqdn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDestinationAddress"></a>

```java
public void resetDestinationAddress()
```

##### `resetDestinationPorts` <a name="resetDestinationPorts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetDestinationPorts"></a>

```java
public void resetDestinationPorts()
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```java
public void resetSourceAddresses()
```

##### `resetSourceIpGroups` <a name="resetSourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```java
public void resetSourceIpGroups()
```

##### `resetTranslatedAddress` <a name="resetTranslatedAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetTranslatedAddress"></a>

```java
public void resetTranslatedAddress()
```

##### `resetTranslatedFqdn` <a name="resetTranslatedFqdn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.resetTranslatedFqdn"></a>

```java
public void resetTranslatedFqdn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">sourceIpGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedAddressInput">translatedAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedFqdnInput">translatedFqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedPortInput">translatedPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceIpGroups">sourceIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedAddress">translatedAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedFqdn">translatedFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedPort">translatedPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationAddressInput"></a>

```java
public java.lang.String getDestinationAddressInput();
```

- *Type:* java.lang.String

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationPortsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```java
public java.util.List<java.lang.String> getSourceAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpGroupsInput`<sup>Optional</sup> <a name="sourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `translatedAddressInput`<sup>Optional</sup> <a name="translatedAddressInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedAddressInput"></a>

```java
public java.lang.String getTranslatedAddressInput();
```

- *Type:* java.lang.String

---

##### `translatedFqdnInput`<sup>Optional</sup> <a name="translatedFqdnInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedFqdnInput"></a>

```java
public java.lang.String getTranslatedFqdnInput();
```

- *Type:* java.lang.String

---

##### `translatedPortInput`<sup>Optional</sup> <a name="translatedPortInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedPortInput"></a>

```java
public java.lang.Number getTranslatedPortInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpGroups`<sup>Required</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `translatedAddress`<sup>Required</sup> <a name="translatedAddress" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedAddress"></a>

```java
public java.lang.String getTranslatedAddress();
```

- *Type:* java.lang.String

---

##### `translatedFqdn`<sup>Required</sup> <a name="translatedFqdn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedFqdn"></a>

```java
public java.lang.String getTranslatedFqdn();
```

- *Type:* java.lang.String

---

##### `translatedPort`<sup>Required</sup> <a name="translatedPort" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.translatedPort"></a>

```java
public java.lang.Number getTranslatedPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNatRuleCollectionRule">FirewallPolicyRuleCollectionGroupNatRuleCollectionRule</a>

---


### FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList;

new FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.get"></a>

```java
public FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>>

---


### FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference;

new FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.rule"></a>

```java
public FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollection">FirewallPolicyRuleCollectionGroupNetworkRuleCollection</a>

---


### FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList;

new FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.get"></a>

```java
public FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>>

---


### FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference <a name="FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference;

new FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationFqdns">resetDestinationFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationIpGroups">resetDestinationIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetSourceIpGroups">resetSourceIpGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationAddresses"></a>

```java
public void resetDestinationAddresses()
```

##### `resetDestinationFqdns` <a name="resetDestinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationFqdns"></a>

```java
public void resetDestinationFqdns()
```

##### `resetDestinationIpGroups` <a name="resetDestinationIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetDestinationIpGroups"></a>

```java
public void resetDestinationIpGroups()
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```java
public void resetSourceAddresses()
```

##### `resetSourceIpGroups` <a name="resetSourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```java
public void resetSourceIpGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationFqdnsInput">destinationFqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationIpGroupsInput">destinationIpGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">sourceIpGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationFqdns">destinationFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationIpGroups">destinationIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceIpGroups">sourceIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationAddressesInput"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationFqdnsInput`<sup>Optional</sup> <a name="destinationFqdnsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationFqdnsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationIpGroupsInput`<sup>Optional</sup> <a name="destinationIpGroupsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationIpGroupsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationIpGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationPortsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```java
public java.util.List<java.lang.String> getSourceAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpGroupsInput`<sup>Optional</sup> <a name="sourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationFqdns`<sup>Required</sup> <a name="destinationFqdns" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationFqdns"></a>

```java
public java.util.List<java.lang.String> getDestinationFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationIpGroups`<sup>Required</sup> <a name="destinationIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationIpGroups"></a>

```java
public java.util.List<java.lang.String> getDestinationIpGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpGroups`<sup>Required</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule">FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule</a>

---


### FirewallPolicyRuleCollectionGroupTimeoutsOutputReference <a name="FirewallPolicyRuleCollectionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_policy_rule_collection_group.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference;

new FirewallPolicyRuleCollectionGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallPolicyRuleCollectionGroup.FirewallPolicyRuleCollectionGroupTimeouts">FirewallPolicyRuleCollectionGroupTimeouts</a>

---




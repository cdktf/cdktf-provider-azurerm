# `firewallNatRuleCollection` Submodule <a name="`firewallNatRuleCollection` Submodule" id="@cdktf/provider-azurerm.firewallNatRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallNatRuleCollection <a name="FirewallNatRuleCollection" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection azurerm_firewall_nat_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollection;

FirewallNatRuleCollection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .azureFirewallName(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .resourceGroupName(java.lang.String)
    .rule(IResolvable|java.util.List<FirewallNatRuleCollectionRule>)
//  .id(java.lang.String)
//  .timeouts(FirewallNatRuleCollectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#action FirewallNatRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.azureFirewallName">azureFirewallName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#azure_firewall_name FirewallNatRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#priority FirewallNatRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#resource_group_name FirewallNatRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#id FirewallNatRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#action FirewallNatRuleCollection#action}.

---

##### `azureFirewallName`<sup>Required</sup> <a name="azureFirewallName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.azureFirewallName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#azure_firewall_name FirewallNatRuleCollection#azure_firewall_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#priority FirewallNatRuleCollection#priority}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#resource_group_name FirewallNatRuleCollection#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#rule FirewallNatRuleCollection#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#id FirewallNatRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#timeouts FirewallNatRuleCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<FirewallNatRuleCollectionRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putTimeouts"></a>

```java
public void putTimeouts(FirewallNatRuleCollectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallNatRuleCollection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollection;

FirewallNatRuleCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollection;

FirewallNatRuleCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollection;

FirewallNatRuleCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollection;

FirewallNatRuleCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FirewallNatRuleCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FirewallNatRuleCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FirewallNatRuleCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FirewallNatRuleCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FirewallNatRuleCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList">FirewallNatRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference">FirewallNatRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallNameInput">azureFirewallNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallName">azureFirewallName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.rule"></a>

```java
public FirewallNatRuleCollectionRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList">FirewallNatRuleCollectionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeouts"></a>

```java
public FirewallNatRuleCollectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference">FirewallNatRuleCollectionTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `azureFirewallNameInput`<sup>Optional</sup> <a name="azureFirewallNameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallNameInput"></a>

```java
public java.lang.String getAzureFirewallNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.ruleInput"></a>

```java
public IResolvable|java.util.List<FirewallNatRuleCollectionRule> getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeoutsInput"></a>

```java
public IResolvable|FirewallNatRuleCollectionTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `azureFirewallName`<sup>Required</sup> <a name="azureFirewallName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallName"></a>

```java
public java.lang.String getAzureFirewallName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallNatRuleCollectionConfig <a name="FirewallNatRuleCollectionConfig" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollectionConfig;

FirewallNatRuleCollectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .azureFirewallName(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .resourceGroupName(java.lang.String)
    .rule(IResolvable|java.util.List<FirewallNatRuleCollectionRule>)
//  .id(java.lang.String)
//  .timeouts(FirewallNatRuleCollectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#action FirewallNatRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.azureFirewallName">azureFirewallName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#azure_firewall_name FirewallNatRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#priority FirewallNatRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#resource_group_name FirewallNatRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#id FirewallNatRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#action FirewallNatRuleCollection#action}.

---

##### `azureFirewallName`<sup>Required</sup> <a name="azureFirewallName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.azureFirewallName"></a>

```java
public java.lang.String getAzureFirewallName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#azure_firewall_name FirewallNatRuleCollection#azure_firewall_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#priority FirewallNatRuleCollection#priority}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#resource_group_name FirewallNatRuleCollection#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.rule"></a>

```java
public IResolvable|java.util.List<FirewallNatRuleCollectionRule> getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#rule FirewallNatRuleCollection#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#id FirewallNatRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.timeouts"></a>

```java
public FirewallNatRuleCollectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#timeouts FirewallNatRuleCollection#timeouts}

---

### FirewallNatRuleCollectionRule <a name="FirewallNatRuleCollectionRule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollectionRule;

FirewallNatRuleCollectionRule.builder()
    .destinationAddresses(java.util.List<java.lang.String>)
    .destinationPorts(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .protocols(java.util.List<java.lang.String>)
    .translatedAddress(java.lang.String)
    .translatedPort(java.lang.String)
//  .description(java.lang.String)
//  .sourceAddresses(java.util.List<java.lang.String>)
//  .sourceIpGroups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#destination_addresses FirewallNatRuleCollection#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#destination_ports FirewallNatRuleCollection#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#protocols FirewallNatRuleCollection#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedAddress">translatedAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#translated_address FirewallNatRuleCollection#translated_address}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedPort">translatedPort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#translated_port FirewallNatRuleCollection#translated_port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#description FirewallNatRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#source_addresses FirewallNatRuleCollection#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceIpGroups">sourceIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#source_ip_groups FirewallNatRuleCollection#source_ip_groups}. |

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#destination_addresses FirewallNatRuleCollection#destination_addresses}.

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#destination_ports FirewallNatRuleCollection#destination_ports}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}.

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#protocols FirewallNatRuleCollection#protocols}.

---

##### `translatedAddress`<sup>Required</sup> <a name="translatedAddress" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedAddress"></a>

```java
public java.lang.String getTranslatedAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#translated_address FirewallNatRuleCollection#translated_address}.

---

##### `translatedPort`<sup>Required</sup> <a name="translatedPort" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedPort"></a>

```java
public java.lang.String getTranslatedPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#translated_port FirewallNatRuleCollection#translated_port}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#description FirewallNatRuleCollection#description}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#source_addresses FirewallNatRuleCollection#source_addresses}.

---

##### `sourceIpGroups`<sup>Optional</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceIpGroups"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#source_ip_groups FirewallNatRuleCollection#source_ip_groups}.

---

### FirewallNatRuleCollectionTimeouts <a name="FirewallNatRuleCollectionTimeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollectionTimeouts;

FirewallNatRuleCollectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#create FirewallNatRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#delete FirewallNatRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#read FirewallNatRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#update FirewallNatRuleCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#create FirewallNatRuleCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#delete FirewallNatRuleCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#read FirewallNatRuleCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/firewall_nat_rule_collection#update FirewallNatRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallNatRuleCollectionRuleList <a name="FirewallNatRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollectionRuleList;

new FirewallNatRuleCollectionRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.get"></a>

```java
public FirewallNatRuleCollectionRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FirewallNatRuleCollectionRule> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>>

---


### FirewallNatRuleCollectionRuleOutputReference <a name="FirewallNatRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollectionRuleOutputReference;

new FirewallNatRuleCollectionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceIpGroups">resetSourceIpGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```java
public void resetSourceAddresses()
```

##### `resetSourceIpGroups` <a name="resetSourceIpGroups" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```java
public void resetSourceIpGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">sourceIpGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddressInput">translatedAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPortInput">translatedPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroups">sourceIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddress">translatedAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPort">translatedPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddressesInput"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPortsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```java
public java.util.List<java.lang.String> getSourceAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpGroupsInput`<sup>Optional</sup> <a name="sourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `translatedAddressInput`<sup>Optional</sup> <a name="translatedAddressInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddressInput"></a>

```java
public java.lang.String getTranslatedAddressInput();
```

- *Type:* java.lang.String

---

##### `translatedPortInput`<sup>Optional</sup> <a name="translatedPortInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPortInput"></a>

```java
public java.lang.String getTranslatedPortInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpGroups`<sup>Required</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `translatedAddress`<sup>Required</sup> <a name="translatedAddress" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddress"></a>

```java
public java.lang.String getTranslatedAddress();
```

- *Type:* java.lang.String

---

##### `translatedPort`<sup>Required</sup> <a name="translatedPort" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPort"></a>

```java
public java.lang.String getTranslatedPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|FirewallNatRuleCollectionRule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule">FirewallNatRuleCollectionRule</a>

---


### FirewallNatRuleCollectionTimeoutsOutputReference <a name="FirewallNatRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_nat_rule_collection.FirewallNatRuleCollectionTimeoutsOutputReference;

new FirewallNatRuleCollectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|FirewallNatRuleCollectionTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

---




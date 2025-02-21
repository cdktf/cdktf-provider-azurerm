# `firewallApplicationRuleCollection` Submodule <a name="`firewallApplicationRuleCollection` Submodule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallApplicationRuleCollection <a name="FirewallApplicationRuleCollection" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection azurerm_firewall_application_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollection;

FirewallApplicationRuleCollection.Builder.create(Construct scope, java.lang.String id)
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
    .action(java.lang.String)
    .azureFirewallName(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .resourceGroupName(java.lang.String)
    .rule(IResolvable)
    .rule(java.util.List<FirewallApplicationRuleCollectionRule>)
//  .id(java.lang.String)
//  .timeouts(FirewallApplicationRuleCollectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#action FirewallApplicationRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.azureFirewallName">azureFirewallName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#azure_firewall_name FirewallApplicationRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#name FirewallApplicationRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#priority FirewallApplicationRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#resource_group_name FirewallApplicationRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#id FirewallApplicationRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#action FirewallApplicationRuleCollection#action}.

---

##### `azureFirewallName`<sup>Required</sup> <a name="azureFirewallName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.azureFirewallName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#azure_firewall_name FirewallApplicationRuleCollection#azure_firewall_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#name FirewallApplicationRuleCollection#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#priority FirewallApplicationRuleCollection#priority}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#resource_group_name FirewallApplicationRuleCollection#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#rule FirewallApplicationRuleCollection#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#id FirewallApplicationRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#timeouts FirewallApplicationRuleCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<FirewallApplicationRuleCollectionRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putTimeouts"></a>

```java
public void putTimeouts(FirewallApplicationRuleCollectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallApplicationRuleCollection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollection;

FirewallApplicationRuleCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollection;

FirewallApplicationRuleCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollection;

FirewallApplicationRuleCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollection;

FirewallApplicationRuleCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FirewallApplicationRuleCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FirewallApplicationRuleCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FirewallApplicationRuleCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FirewallApplicationRuleCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FirewallApplicationRuleCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList">FirewallApplicationRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference">FirewallApplicationRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.azureFirewallNameInput">azureFirewallNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.azureFirewallName">azureFirewallName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.rule"></a>

```java
public FirewallApplicationRuleCollectionRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList">FirewallApplicationRuleCollectionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.timeouts"></a>

```java
public FirewallApplicationRuleCollectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference">FirewallApplicationRuleCollectionTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `azureFirewallNameInput`<sup>Optional</sup> <a name="azureFirewallNameInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.azureFirewallNameInput"></a>

```java
public java.lang.String getAzureFirewallNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `azureFirewallName`<sup>Required</sup> <a name="azureFirewallName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.azureFirewallName"></a>

```java
public java.lang.String getAzureFirewallName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallApplicationRuleCollectionConfig <a name="FirewallApplicationRuleCollectionConfig" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollectionConfig;

FirewallApplicationRuleCollectionConfig.builder()
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
    .action(java.lang.String)
    .azureFirewallName(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .resourceGroupName(java.lang.String)
    .rule(IResolvable)
    .rule(java.util.List<FirewallApplicationRuleCollectionRule>)
//  .id(java.lang.String)
//  .timeouts(FirewallApplicationRuleCollectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#action FirewallApplicationRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.azureFirewallName">azureFirewallName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#azure_firewall_name FirewallApplicationRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#name FirewallApplicationRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#priority FirewallApplicationRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#resource_group_name FirewallApplicationRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#id FirewallApplicationRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#action FirewallApplicationRuleCollection#action}.

---

##### `azureFirewallName`<sup>Required</sup> <a name="azureFirewallName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.azureFirewallName"></a>

```java
public java.lang.String getAzureFirewallName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#azure_firewall_name FirewallApplicationRuleCollection#azure_firewall_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#name FirewallApplicationRuleCollection#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#priority FirewallApplicationRuleCollection#priority}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#resource_group_name FirewallApplicationRuleCollection#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#rule FirewallApplicationRuleCollection#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#id FirewallApplicationRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionConfig.property.timeouts"></a>

```java
public FirewallApplicationRuleCollectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#timeouts FirewallApplicationRuleCollection#timeouts}

---

### FirewallApplicationRuleCollectionRule <a name="FirewallApplicationRuleCollectionRule" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollectionRule;

FirewallApplicationRuleCollectionRule.builder()
    .name(java.lang.String)
//  .description(java.lang.String)
//  .fqdnTags(java.util.List<java.lang.String>)
//  .protocol(IResolvable)
//  .protocol(java.util.List<FirewallApplicationRuleCollectionRuleProtocol>)
//  .sourceAddresses(java.util.List<java.lang.String>)
//  .sourceIpGroups(java.util.List<java.lang.String>)
//  .targetFqdns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#name FirewallApplicationRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#description FirewallApplicationRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.fqdnTags">fqdnTags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#fqdn_tags FirewallApplicationRuleCollection#fqdn_tags}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.protocol">protocol</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol">FirewallApplicationRuleCollectionRuleProtocol</a>></code> | protocol block. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#source_addresses FirewallApplicationRuleCollection#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.sourceIpGroups">sourceIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#source_ip_groups FirewallApplicationRuleCollection#source_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.targetFqdns">targetFqdns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#target_fqdns FirewallApplicationRuleCollection#target_fqdns}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#name FirewallApplicationRuleCollection#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#description FirewallApplicationRuleCollection#description}.

---

##### `fqdnTags`<sup>Optional</sup> <a name="fqdnTags" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.fqdnTags"></a>

```java
public java.util.List<java.lang.String> getFqdnTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#fqdn_tags FirewallApplicationRuleCollection#fqdn_tags}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.protocol"></a>

```java
public java.lang.Object getProtocol();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol">FirewallApplicationRuleCollectionRuleProtocol</a>>

protocol block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#protocol FirewallApplicationRuleCollection#protocol}

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#source_addresses FirewallApplicationRuleCollection#source_addresses}.

---

##### `sourceIpGroups`<sup>Optional</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.sourceIpGroups"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#source_ip_groups FirewallApplicationRuleCollection#source_ip_groups}.

---

##### `targetFqdns`<sup>Optional</sup> <a name="targetFqdns" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule.property.targetFqdns"></a>

```java
public java.util.List<java.lang.String> getTargetFqdns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#target_fqdns FirewallApplicationRuleCollection#target_fqdns}.

---

### FirewallApplicationRuleCollectionRuleProtocol <a name="FirewallApplicationRuleCollectionRuleProtocol" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollectionRuleProtocol;

FirewallApplicationRuleCollectionRuleProtocol.builder()
    .port(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#port FirewallApplicationRuleCollection#port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#type FirewallApplicationRuleCollection#type}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#port FirewallApplicationRuleCollection#port}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#type FirewallApplicationRuleCollection#type}.

---

### FirewallApplicationRuleCollectionTimeouts <a name="FirewallApplicationRuleCollectionTimeouts" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollectionTimeouts;

FirewallApplicationRuleCollectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#create FirewallApplicationRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#delete FirewallApplicationRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#read FirewallApplicationRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#update FirewallApplicationRuleCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#create FirewallApplicationRuleCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#delete FirewallApplicationRuleCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#read FirewallApplicationRuleCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/firewall_application_rule_collection#update FirewallApplicationRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallApplicationRuleCollectionRuleList <a name="FirewallApplicationRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollectionRuleList;

new FirewallApplicationRuleCollectionRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.get"></a>

```java
public FirewallApplicationRuleCollectionRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a>>

---


### FirewallApplicationRuleCollectionRuleOutputReference <a name="FirewallApplicationRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollectionRuleOutputReference;

new FirewallApplicationRuleCollectionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.putProtocol">putProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetFqdnTags">resetFqdnTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetSourceIpGroups">resetSourceIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetTargetFqdns">resetTargetFqdns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProtocol` <a name="putProtocol" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.putProtocol"></a>

```java
public void putProtocol(IResolvable OR java.util.List<FirewallApplicationRuleCollectionRuleProtocol> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.putProtocol.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol">FirewallApplicationRuleCollectionRuleProtocol</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFqdnTags` <a name="resetFqdnTags" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetFqdnTags"></a>

```java
public void resetFqdnTags()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```java
public void resetSourceAddresses()
```

##### `resetSourceIpGroups` <a name="resetSourceIpGroups" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```java
public void resetSourceIpGroups()
```

##### `resetTargetFqdns` <a name="resetTargetFqdns" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.resetTargetFqdns"></a>

```java
public void resetTargetFqdns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.protocol">protocol</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList">FirewallApplicationRuleCollectionRuleProtocolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqdnTagsInput">fqdnTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol">FirewallApplicationRuleCollectionRuleProtocol</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">sourceIpGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.targetFqdnsInput">targetFqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqdnTags">fqdnTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceIpGroups">sourceIpGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.targetFqdns">targetFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.protocol"></a>

```java
public FirewallApplicationRuleCollectionRuleProtocolList getProtocol();
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList">FirewallApplicationRuleCollectionRuleProtocolList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fqdnTagsInput`<sup>Optional</sup> <a name="fqdnTagsInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqdnTagsInput"></a>

```java
public java.util.List<java.lang.String> getFqdnTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.protocolInput"></a>

```java
public java.lang.Object getProtocolInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol">FirewallApplicationRuleCollectionRuleProtocol</a>>

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```java
public java.util.List<java.lang.String> getSourceAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpGroupsInput`<sup>Optional</sup> <a name="sourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetFqdnsInput`<sup>Optional</sup> <a name="targetFqdnsInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.targetFqdnsInput"></a>

```java
public java.util.List<java.lang.String> getTargetFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fqdnTags`<sup>Required</sup> <a name="fqdnTags" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.fqdnTags"></a>

```java
public java.util.List<java.lang.String> getFqdnTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpGroups`<sup>Required</sup> <a name="sourceIpGroups" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```java
public java.util.List<java.lang.String> getSourceIpGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetFqdns`<sup>Required</sup> <a name="targetFqdns" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.targetFqdns"></a>

```java
public java.util.List<java.lang.String> getTargetFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRule">FirewallApplicationRuleCollectionRule</a>

---


### FirewallApplicationRuleCollectionRuleProtocolList <a name="FirewallApplicationRuleCollectionRuleProtocolList" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollectionRuleProtocolList;

new FirewallApplicationRuleCollectionRuleProtocolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.get"></a>

```java
public FirewallApplicationRuleCollectionRuleProtocolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol">FirewallApplicationRuleCollectionRuleProtocol</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol">FirewallApplicationRuleCollectionRuleProtocol</a>>

---


### FirewallApplicationRuleCollectionRuleProtocolOutputReference <a name="FirewallApplicationRuleCollectionRuleProtocolOutputReference" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollectionRuleProtocolOutputReference;

new FirewallApplicationRuleCollectionRuleProtocolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol">FirewallApplicationRuleCollectionRuleProtocol</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocolOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionRuleProtocol">FirewallApplicationRuleCollectionRuleProtocol</a>

---


### FirewallApplicationRuleCollectionTimeoutsOutputReference <a name="FirewallApplicationRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.firewall_application_rule_collection.FirewallApplicationRuleCollectionTimeoutsOutputReference;

new FirewallApplicationRuleCollectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.firewallApplicationRuleCollection.FirewallApplicationRuleCollectionTimeouts">FirewallApplicationRuleCollectionTimeouts</a>

---




# `azurerm_monitor_action_rule_action_group`

Refer to the Terraform Registory for docs: [`azurerm_monitor_action_rule_action_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group).

# `monitorActionRuleActionGroup` Submodule <a name="`monitorActionRuleActionGroup` Submodule" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActionRuleActionGroup <a name="MonitorActionRuleActionGroup" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group azurerm_monitor_action_rule_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroup;

MonitorActionRuleActionGroup.Builder.create(Construct scope, java.lang.String id)
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
    .actionGroupId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .condition(MonitorActionRuleActionGroupCondition)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .scope(MonitorActionRuleActionGroupScope)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MonitorActionRuleActionGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.actionGroupId">actionGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionGroupId`<sup>Required</sup> <a name="actionGroupId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.actionGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#condition MonitorActionRuleActionGroup#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#scope MonitorActionRuleActionGroup#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#timeouts MonitorActionRuleActionGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition"></a>

```java
public void putCondition(MonitorActionRuleActionGroupCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---

##### `putScope` <a name="putScope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope"></a>

```java
public void putScope(MonitorActionRuleActionGroupScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts"></a>

```java
public void putTimeouts(MonitorActionRuleActionGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetId"></a>

```java
public void resetId()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetScope"></a>

```java
public void resetScope()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroup;

MonitorActionRuleActionGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroup;

MonitorActionRuleActionGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroup;

MonitorActionRuleActionGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference">MonitorActionRuleActionGroupConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference">MonitorActionRuleActionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference">MonitorActionRuleActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupIdInput">actionGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupId">actionGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.condition"></a>

```java
public MonitorActionRuleActionGroupConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference">MonitorActionRuleActionGroupConditionOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scope"></a>

```java
public MonitorActionRuleActionGroupScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference">MonitorActionRuleActionGroupScopeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeouts"></a>

```java
public MonitorActionRuleActionGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference">MonitorActionRuleActionGroupTimeoutsOutputReference</a>

---

##### `actionGroupIdInput`<sup>Optional</sup> <a name="actionGroupIdInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupIdInput"></a>

```java
public java.lang.String getActionGroupIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.conditionInput"></a>

```java
public MonitorActionRuleActionGroupCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scopeInput"></a>

```java
public MonitorActionRuleActionGroupScope getScopeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

---

##### `actionGroupId`<sup>Required</sup> <a name="actionGroupId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupId"></a>

```java
public java.lang.String getActionGroupId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActionRuleActionGroupCondition <a name="MonitorActionRuleActionGroupCondition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupCondition;

MonitorActionRuleActionGroupCondition.builder()
//  .alertContext(MonitorActionRuleActionGroupConditionAlertContext)
//  .alertRuleId(MonitorActionRuleActionGroupConditionAlertRuleId)
//  .description(MonitorActionRuleActionGroupConditionDescription)
//  .monitor(MonitorActionRuleActionGroupConditionMonitor)
//  .monitorService(MonitorActionRuleActionGroupConditionMonitorService)
//  .severity(MonitorActionRuleActionGroupConditionSeverity)
//  .targetResourceType(MonitorActionRuleActionGroupConditionTargetResourceType)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertContext">alertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | alert_context block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertRuleId">alertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | alert_rule_id block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | description block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitorService">monitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | monitor_service block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | severity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.targetResourceType">targetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | target_resource_type block. |

---

##### `alertContext`<sup>Optional</sup> <a name="alertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertContext"></a>

```java
public MonitorActionRuleActionGroupConditionAlertContext getAlertContext();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#alert_context MonitorActionRuleActionGroup#alert_context}

---

##### `alertRuleId`<sup>Optional</sup> <a name="alertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertRuleId"></a>

```java
public MonitorActionRuleActionGroupConditionAlertRuleId getAlertRuleId();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#alert_rule_id MonitorActionRuleActionGroup#alert_rule_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.description"></a>

```java
public MonitorActionRuleActionGroupConditionDescription getDescription();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitor"></a>

```java
public MonitorActionRuleActionGroupConditionMonitor getMonitor();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#monitor MonitorActionRuleActionGroup#monitor}

---

##### `monitorService`<sup>Optional</sup> <a name="monitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitorService"></a>

```java
public MonitorActionRuleActionGroupConditionMonitorService getMonitorService();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#monitor_service MonitorActionRuleActionGroup#monitor_service}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.severity"></a>

```java
public MonitorActionRuleActionGroupConditionSeverity getSeverity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#severity MonitorActionRuleActionGroup#severity}

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.targetResourceType"></a>

```java
public MonitorActionRuleActionGroupConditionTargetResourceType getTargetResourceType();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#target_resource_type MonitorActionRuleActionGroup#target_resource_type}

---

### MonitorActionRuleActionGroupConditionAlertContext <a name="MonitorActionRuleActionGroupConditionAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionAlertContext;

MonitorActionRuleActionGroupConditionAlertContext.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionAlertRuleId <a name="MonitorActionRuleActionGroupConditionAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionAlertRuleId;

MonitorActionRuleActionGroupConditionAlertRuleId.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionDescription <a name="MonitorActionRuleActionGroupConditionDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionDescription;

MonitorActionRuleActionGroupConditionDescription.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionMonitor <a name="MonitorActionRuleActionGroupConditionMonitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionMonitor;

MonitorActionRuleActionGroupConditionMonitor.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionMonitorService <a name="MonitorActionRuleActionGroupConditionMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionMonitorService;

MonitorActionRuleActionGroupConditionMonitorService.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionSeverity <a name="MonitorActionRuleActionGroupConditionSeverity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionSeverity;

MonitorActionRuleActionGroupConditionSeverity.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionTargetResourceType <a name="MonitorActionRuleActionGroupConditionTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionTargetResourceType;

MonitorActionRuleActionGroupConditionTargetResourceType.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConfig <a name="MonitorActionRuleActionGroupConfig" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConfig;

MonitorActionRuleActionGroupConfig.builder()
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
    .actionGroupId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .condition(MonitorActionRuleActionGroupCondition)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .scope(MonitorActionRuleActionGroupScope)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MonitorActionRuleActionGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.actionGroupId">actionGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionGroupId`<sup>Required</sup> <a name="actionGroupId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.actionGroupId"></a>

```java
public java.lang.String getActionGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.condition"></a>

```java
public MonitorActionRuleActionGroupCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#condition MonitorActionRuleActionGroup#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.scope"></a>

```java
public MonitorActionRuleActionGroupScope getScope();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#scope MonitorActionRuleActionGroup#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.timeouts"></a>

```java
public MonitorActionRuleActionGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#timeouts MonitorActionRuleActionGroup#timeouts}

---

### MonitorActionRuleActionGroupScope <a name="MonitorActionRuleActionGroupScope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupScope;

MonitorActionRuleActionGroupScope.builder()
    .resourceIds(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#resource_ids MonitorActionRuleActionGroup#resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#type MonitorActionRuleActionGroup#type}. |

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#resource_ids MonitorActionRuleActionGroup#resource_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#type MonitorActionRuleActionGroup#type}.

---

### MonitorActionRuleActionGroupTimeouts <a name="MonitorActionRuleActionGroupTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupTimeouts;

MonitorActionRuleActionGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#create MonitorActionRuleActionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#delete MonitorActionRuleActionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#read MonitorActionRuleActionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#update MonitorActionRuleActionGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#create MonitorActionRuleActionGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#delete MonitorActionRuleActionGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#read MonitorActionRuleActionGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/monitor_action_rule_action_group#update MonitorActionRuleActionGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActionRuleActionGroupConditionAlertContextOutputReference <a name="MonitorActionRuleActionGroupConditionAlertContextOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionAlertContextOutputReference;

new MonitorActionRuleActionGroupConditionAlertContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.internalValue"></a>

```java
public MonitorActionRuleActionGroupConditionAlertContext getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---


### MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference <a name="MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference;

new MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue"></a>

```java
public MonitorActionRuleActionGroupConditionAlertRuleId getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---


### MonitorActionRuleActionGroupConditionDescriptionOutputReference <a name="MonitorActionRuleActionGroupConditionDescriptionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionDescriptionOutputReference;

new MonitorActionRuleActionGroupConditionDescriptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.internalValue"></a>

```java
public MonitorActionRuleActionGroupConditionDescription getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---


### MonitorActionRuleActionGroupConditionMonitorOutputReference <a name="MonitorActionRuleActionGroupConditionMonitorOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionMonitorOutputReference;

new MonitorActionRuleActionGroupConditionMonitorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.internalValue"></a>

```java
public MonitorActionRuleActionGroupConditionMonitor getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---


### MonitorActionRuleActionGroupConditionMonitorServiceOutputReference <a name="MonitorActionRuleActionGroupConditionMonitorServiceOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference;

new MonitorActionRuleActionGroupConditionMonitorServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue"></a>

```java
public MonitorActionRuleActionGroupConditionMonitorService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---


### MonitorActionRuleActionGroupConditionOutputReference <a name="MonitorActionRuleActionGroupConditionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionOutputReference;

new MonitorActionRuleActionGroupConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext">putAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId">putAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription">putDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor">putMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService">putMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity">putSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType">putTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertContext">resetAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertRuleId">resetAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitorService">resetMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlertContext` <a name="putAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext"></a>

```java
public void putAlertContext(MonitorActionRuleActionGroupConditionAlertContext value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---

##### `putAlertRuleId` <a name="putAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId"></a>

```java
public void putAlertRuleId(MonitorActionRuleActionGroupConditionAlertRuleId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---

##### `putDescription` <a name="putDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription"></a>

```java
public void putDescription(MonitorActionRuleActionGroupConditionDescription value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---

##### `putMonitor` <a name="putMonitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor"></a>

```java
public void putMonitor(MonitorActionRuleActionGroupConditionMonitor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---

##### `putMonitorService` <a name="putMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService"></a>

```java
public void putMonitorService(MonitorActionRuleActionGroupConditionMonitorService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---

##### `putSeverity` <a name="putSeverity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity"></a>

```java
public void putSeverity(MonitorActionRuleActionGroupConditionSeverity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---

##### `putTargetResourceType` <a name="putTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType"></a>

```java
public void putTargetResourceType(MonitorActionRuleActionGroupConditionTargetResourceType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---

##### `resetAlertContext` <a name="resetAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertContext"></a>

```java
public void resetAlertContext()
```

##### `resetAlertRuleId` <a name="resetAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertRuleId"></a>

```java
public void resetAlertRuleId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitor"></a>

```java
public void resetMonitor()
```

##### `resetMonitorService` <a name="resetMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitorService"></a>

```java
public void resetMonitorService()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetTargetResourceType"></a>

```java
public void resetTargetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContext">alertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference">MonitorActionRuleActionGroupConditionAlertContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleId">alertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference">MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference">MonitorActionRuleActionGroupConditionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference">MonitorActionRuleActionGroupConditionMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorService">monitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference">MonitorActionRuleActionGroupConditionMonitorServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference">MonitorActionRuleActionGroupConditionSeverityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceType">targetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContextInput">alertContextInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleIdInput">alertRuleIdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorInput">monitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorServiceInput">monitorServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severityInput">severityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alertContext`<sup>Required</sup> <a name="alertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContext"></a>

```java
public MonitorActionRuleActionGroupConditionAlertContextOutputReference getAlertContext();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference">MonitorActionRuleActionGroupConditionAlertContextOutputReference</a>

---

##### `alertRuleId`<sup>Required</sup> <a name="alertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleId"></a>

```java
public MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference getAlertRuleId();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference">MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.description"></a>

```java
public MonitorActionRuleActionGroupConditionDescriptionOutputReference getDescription();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference">MonitorActionRuleActionGroupConditionDescriptionOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitor"></a>

```java
public MonitorActionRuleActionGroupConditionMonitorOutputReference getMonitor();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference">MonitorActionRuleActionGroupConditionMonitorOutputReference</a>

---

##### `monitorService`<sup>Required</sup> <a name="monitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorService"></a>

```java
public MonitorActionRuleActionGroupConditionMonitorServiceOutputReference getMonitorService();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference">MonitorActionRuleActionGroupConditionMonitorServiceOutputReference</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severity"></a>

```java
public MonitorActionRuleActionGroupConditionSeverityOutputReference getSeverity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference">MonitorActionRuleActionGroupConditionSeverityOutputReference</a>

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceType"></a>

```java
public MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference getTargetResourceType();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference</a>

---

##### `alertContextInput`<sup>Optional</sup> <a name="alertContextInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContextInput"></a>

```java
public MonitorActionRuleActionGroupConditionAlertContext getAlertContextInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---

##### `alertRuleIdInput`<sup>Optional</sup> <a name="alertRuleIdInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleIdInput"></a>

```java
public MonitorActionRuleActionGroupConditionAlertRuleId getAlertRuleIdInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.descriptionInput"></a>

```java
public MonitorActionRuleActionGroupConditionDescription getDescriptionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorInput"></a>

```java
public MonitorActionRuleActionGroupConditionMonitor getMonitorInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---

##### `monitorServiceInput`<sup>Optional</sup> <a name="monitorServiceInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorServiceInput"></a>

```java
public MonitorActionRuleActionGroupConditionMonitorService getMonitorServiceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severityInput"></a>

```java
public MonitorActionRuleActionGroupConditionSeverity getSeverityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceTypeInput"></a>

```java
public MonitorActionRuleActionGroupConditionTargetResourceType getTargetResourceTypeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.internalValue"></a>

```java
public MonitorActionRuleActionGroupCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---


### MonitorActionRuleActionGroupConditionSeverityOutputReference <a name="MonitorActionRuleActionGroupConditionSeverityOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionSeverityOutputReference;

new MonitorActionRuleActionGroupConditionSeverityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.internalValue"></a>

```java
public MonitorActionRuleActionGroupConditionSeverity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---


### MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference <a name="MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference;

new MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue"></a>

```java
public MonitorActionRuleActionGroupConditionTargetResourceType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---


### MonitorActionRuleActionGroupScopeOutputReference <a name="MonitorActionRuleActionGroupScopeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupScopeOutputReference;

new MonitorActionRuleActionGroupScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIdsInput">resourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getResourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.internalValue"></a>

```java
public MonitorActionRuleActionGroupScope getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---


### MonitorActionRuleActionGroupTimeoutsOutputReference <a name="MonitorActionRuleActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_action_rule_action_group.MonitorActionRuleActionGroupTimeoutsOutputReference;

new MonitorActionRuleActionGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

---




# `cdnFrontdoorRule` Submodule <a name="`cdnFrontdoorRule` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorRule <a name="CdnFrontdoorRule" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule azurerm_cdn_frontdoor_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRule;

CdnFrontdoorRule.Builder.create(Construct scope, java.lang.String id)
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
    .actions(CdnFrontdoorRuleActions)
    .cdnFrontdoorRuleSetId(java.lang.String)
    .name(java.lang.String)
    .order(java.lang.Number)
//  .behaviorOnMatch(java.lang.String)
//  .conditions(CdnFrontdoorRuleConditions)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.actions">actions</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.cdnFrontdoorRuleSetId">cdnFrontdoorRuleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_rule_set_id CdnFrontdoorRule#cdn_frontdoor_rule_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#order CdnFrontdoorRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.behaviorOnMatch">behaviorOnMatch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#behavior_on_match CdnFrontdoorRule#behavior_on_match}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#id CdnFrontdoorRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.actions"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#actions CdnFrontdoorRule#actions}

---

##### `cdnFrontdoorRuleSetId`<sup>Required</sup> <a name="cdnFrontdoorRuleSetId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.cdnFrontdoorRuleSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_rule_set_id CdnFrontdoorRule#cdn_frontdoor_rule_set_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.order"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#order CdnFrontdoorRule#order}.

---

##### `behaviorOnMatch`<sup>Optional</sup> <a name="behaviorOnMatch" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.behaviorOnMatch"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#behavior_on_match CdnFrontdoorRule#behavior_on_match}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.conditions"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#conditions CdnFrontdoorRule#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#id CdnFrontdoorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#timeouts CdnFrontdoorRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetBehaviorOnMatch">resetBehaviorOnMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putActions"></a>

```java
public void putActions(CdnFrontdoorRuleActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putConditions"></a>

```java
public void putConditions(CdnFrontdoorRuleConditions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putTimeouts"></a>

```java
public void putTimeouts(CdnFrontdoorRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

---

##### `resetBehaviorOnMatch` <a name="resetBehaviorOnMatch" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetBehaviorOnMatch"></a>

```java
public void resetBehaviorOnMatch()
```

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRule;

CdnFrontdoorRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRule;

CdnFrontdoorRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRule;

CdnFrontdoorRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRule;

CdnFrontdoorRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CdnFrontdoorRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CdnFrontdoorRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CdnFrontdoorRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CdnFrontdoorRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference">CdnFrontdoorRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetName">cdnFrontdoorRuleSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference">CdnFrontdoorRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference">CdnFrontdoorRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviorOnMatchInput">behaviorOnMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetIdInput">cdnFrontdoorRuleSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditionsInput">conditionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviorOnMatch">behaviorOnMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetId">cdnFrontdoorRuleSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actions"></a>

```java
public CdnFrontdoorRuleActionsOutputReference getActions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference">CdnFrontdoorRuleActionsOutputReference</a>

---

##### `cdnFrontdoorRuleSetName`<sup>Required</sup> <a name="cdnFrontdoorRuleSetName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetName"></a>

```java
public java.lang.String getCdnFrontdoorRuleSetName();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditions"></a>

```java
public CdnFrontdoorRuleConditionsOutputReference getConditions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference">CdnFrontdoorRuleConditionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeouts"></a>

```java
public CdnFrontdoorRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference">CdnFrontdoorRuleTimeoutsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actionsInput"></a>

```java
public CdnFrontdoorRuleActions getActionsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

---

##### `behaviorOnMatchInput`<sup>Optional</sup> <a name="behaviorOnMatchInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviorOnMatchInput"></a>

```java
public java.lang.String getBehaviorOnMatchInput();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorRuleSetIdInput`<sup>Optional</sup> <a name="cdnFrontdoorRuleSetIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetIdInput"></a>

```java
public java.lang.String getCdnFrontdoorRuleSetIdInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditionsInput"></a>

```java
public CdnFrontdoorRuleConditions getConditionsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

---

##### `behaviorOnMatch`<sup>Required</sup> <a name="behaviorOnMatch" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviorOnMatch"></a>

```java
public java.lang.String getBehaviorOnMatch();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorRuleSetId`<sup>Required</sup> <a name="cdnFrontdoorRuleSetId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetId"></a>

```java
public java.lang.String getCdnFrontdoorRuleSetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorRuleActions <a name="CdnFrontdoorRuleActions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActions;

CdnFrontdoorRuleActions.builder()
//  .requestHeaderAction(IResolvable)
//  .requestHeaderAction(java.util.List<CdnFrontdoorRuleActionsRequestHeaderAction>)
//  .responseHeaderAction(IResolvable)
//  .responseHeaderAction(java.util.List<CdnFrontdoorRuleActionsResponseHeaderAction>)
//  .routeConfigurationOverrideAction(CdnFrontdoorRuleActionsRouteConfigurationOverrideAction)
//  .urlRedirectAction(CdnFrontdoorRuleActionsUrlRedirectAction)
//  .urlRewriteAction(CdnFrontdoorRuleActionsUrlRewriteAction)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.requestHeaderAction">requestHeaderAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction">CdnFrontdoorRuleActionsRequestHeaderAction</a>></code> | request_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.responseHeaderAction">responseHeaderAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction">CdnFrontdoorRuleActionsResponseHeaderAction</a>></code> | response_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.routeConfigurationOverrideAction">routeConfigurationOverrideAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction">CdnFrontdoorRuleActionsRouteConfigurationOverrideAction</a></code> | route_configuration_override_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRedirectAction">urlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction">CdnFrontdoorRuleActionsUrlRedirectAction</a></code> | url_redirect_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRewriteAction">urlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction">CdnFrontdoorRuleActionsUrlRewriteAction</a></code> | url_rewrite_action block. |

---

##### `requestHeaderAction`<sup>Optional</sup> <a name="requestHeaderAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.requestHeaderAction"></a>

```java
public java.lang.Object getRequestHeaderAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction">CdnFrontdoorRuleActionsRequestHeaderAction</a>>

request_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#request_header_action CdnFrontdoorRule#request_header_action}

---

##### `responseHeaderAction`<sup>Optional</sup> <a name="responseHeaderAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.responseHeaderAction"></a>

```java
public java.lang.Object getResponseHeaderAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction">CdnFrontdoorRuleActionsResponseHeaderAction</a>>

response_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#response_header_action CdnFrontdoorRule#response_header_action}

---

##### `routeConfigurationOverrideAction`<sup>Optional</sup> <a name="routeConfigurationOverrideAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.routeConfigurationOverrideAction"></a>

```java
public CdnFrontdoorRuleActionsRouteConfigurationOverrideAction getRouteConfigurationOverrideAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction">CdnFrontdoorRuleActionsRouteConfigurationOverrideAction</a>

route_configuration_override_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#route_configuration_override_action CdnFrontdoorRule#route_configuration_override_action}

---

##### `urlRedirectAction`<sup>Optional</sup> <a name="urlRedirectAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRedirectAction"></a>

```java
public CdnFrontdoorRuleActionsUrlRedirectAction getUrlRedirectAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction">CdnFrontdoorRuleActionsUrlRedirectAction</a>

url_redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#url_redirect_action CdnFrontdoorRule#url_redirect_action}

---

##### `urlRewriteAction`<sup>Optional</sup> <a name="urlRewriteAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRewriteAction"></a>

```java
public CdnFrontdoorRuleActionsUrlRewriteAction getUrlRewriteAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction">CdnFrontdoorRuleActionsUrlRewriteAction</a>

url_rewrite_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#url_rewrite_action CdnFrontdoorRule#url_rewrite_action}

---

### CdnFrontdoorRuleActionsRequestHeaderAction <a name="CdnFrontdoorRuleActionsRequestHeaderAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsRequestHeaderAction;

CdnFrontdoorRuleActionsRequestHeaderAction.builder()
    .headerAction(java.lang.String)
    .headerName(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction.property.headerAction">headerAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#header_action CdnFrontdoorRule#header_action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction.property.headerName">headerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#value CdnFrontdoorRule#value}. |

---

##### `headerAction`<sup>Required</sup> <a name="headerAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction.property.headerAction"></a>

```java
public java.lang.String getHeaderAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#header_action CdnFrontdoorRule#header_action}.

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#value CdnFrontdoorRule#value}.

---

### CdnFrontdoorRuleActionsResponseHeaderAction <a name="CdnFrontdoorRuleActionsResponseHeaderAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsResponseHeaderAction;

CdnFrontdoorRuleActionsResponseHeaderAction.builder()
    .headerAction(java.lang.String)
    .headerName(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction.property.headerAction">headerAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#header_action CdnFrontdoorRule#header_action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction.property.headerName">headerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#value CdnFrontdoorRule#value}. |

---

##### `headerAction`<sup>Required</sup> <a name="headerAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction.property.headerAction"></a>

```java
public java.lang.String getHeaderAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#header_action CdnFrontdoorRule#header_action}.

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#value CdnFrontdoorRule#value}.

---

### CdnFrontdoorRuleActionsRouteConfigurationOverrideAction <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction;

CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.builder()
//  .cacheBehavior(java.lang.String)
//  .cacheDuration(java.lang.String)
//  .cdnFrontdoorOriginGroupId(java.lang.String)
//  .compressionEnabled(java.lang.Boolean)
//  .compressionEnabled(IResolvable)
//  .forwardingProtocol(java.lang.String)
//  .queryStringCachingBehavior(java.lang.String)
//  .queryStringParameters(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.cacheBehavior">cacheBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cache_behavior CdnFrontdoorRule#cache_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.cacheDuration">cacheDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cache_duration CdnFrontdoorRule#cache_duration}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.cdnFrontdoorOriginGroupId">cdnFrontdoorOriginGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_origin_group_id CdnFrontdoorRule#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.compressionEnabled">compressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#compression_enabled CdnFrontdoorRule#compression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.forwardingProtocol">forwardingProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#forwarding_protocol CdnFrontdoorRule#forwarding_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.queryStringCachingBehavior">queryStringCachingBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#query_string_caching_behavior CdnFrontdoorRule#query_string_caching_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.queryStringParameters">queryStringParameters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#query_string_parameters CdnFrontdoorRule#query_string_parameters}. |

---

##### `cacheBehavior`<sup>Optional</sup> <a name="cacheBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.cacheBehavior"></a>

```java
public java.lang.String getCacheBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cache_behavior CdnFrontdoorRule#cache_behavior}.

---

##### `cacheDuration`<sup>Optional</sup> <a name="cacheDuration" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.cacheDuration"></a>

```java
public java.lang.String getCacheDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cache_duration CdnFrontdoorRule#cache_duration}.

---

##### `cdnFrontdoorOriginGroupId`<sup>Optional</sup> <a name="cdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.cdnFrontdoorOriginGroupId"></a>

```java
public java.lang.String getCdnFrontdoorOriginGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_origin_group_id CdnFrontdoorRule#cdn_frontdoor_origin_group_id}.

---

##### `compressionEnabled`<sup>Optional</sup> <a name="compressionEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.compressionEnabled"></a>

```java
public java.lang.Object getCompressionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#compression_enabled CdnFrontdoorRule#compression_enabled}.

---

##### `forwardingProtocol`<sup>Optional</sup> <a name="forwardingProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.forwardingProtocol"></a>

```java
public java.lang.String getForwardingProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#forwarding_protocol CdnFrontdoorRule#forwarding_protocol}.

---

##### `queryStringCachingBehavior`<sup>Optional</sup> <a name="queryStringCachingBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.queryStringCachingBehavior"></a>

```java
public java.lang.String getQueryStringCachingBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#query_string_caching_behavior CdnFrontdoorRule#query_string_caching_behavior}.

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction.property.queryStringParameters"></a>

```java
public java.util.List<java.lang.String> getQueryStringParameters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#query_string_parameters CdnFrontdoorRule#query_string_parameters}.

---

### CdnFrontdoorRuleActionsUrlRedirectAction <a name="CdnFrontdoorRuleActionsUrlRedirectAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsUrlRedirectAction;

CdnFrontdoorRuleActionsUrlRedirectAction.builder()
    .destinationHostname(java.lang.String)
    .redirectType(java.lang.String)
//  .destinationFragment(java.lang.String)
//  .destinationPath(java.lang.String)
//  .queryString(java.lang.String)
//  .redirectProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.destinationHostname">destinationHostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#destination_hostname CdnFrontdoorRule#destination_hostname}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.redirectType">redirectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#redirect_type CdnFrontdoorRule#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.destinationFragment">destinationFragment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#destination_fragment CdnFrontdoorRule#destination_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.destinationPath">destinationPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.queryString">queryString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.redirectProtocol">redirectProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#redirect_protocol CdnFrontdoorRule#redirect_protocol}. |

---

##### `destinationHostname`<sup>Required</sup> <a name="destinationHostname" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.destinationHostname"></a>

```java
public java.lang.String getDestinationHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#destination_hostname CdnFrontdoorRule#destination_hostname}.

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.redirectType"></a>

```java
public java.lang.String getRedirectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#redirect_type CdnFrontdoorRule#redirect_type}.

---

##### `destinationFragment`<sup>Optional</sup> <a name="destinationFragment" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.destinationFragment"></a>

```java
public java.lang.String getDestinationFragment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#destination_fragment CdnFrontdoorRule#destination_fragment}.

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.destinationPath"></a>

```java
public java.lang.String getDestinationPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}.

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}.

---

##### `redirectProtocol`<sup>Optional</sup> <a name="redirectProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction.property.redirectProtocol"></a>

```java
public java.lang.String getRedirectProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#redirect_protocol CdnFrontdoorRule#redirect_protocol}.

---

### CdnFrontdoorRuleActionsUrlRewriteAction <a name="CdnFrontdoorRuleActionsUrlRewriteAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsUrlRewriteAction;

CdnFrontdoorRuleActionsUrlRewriteAction.builder()
    .destination(java.lang.String)
    .sourcePattern(java.lang.String)
//  .preserveUnmatchedPath(java.lang.Boolean)
//  .preserveUnmatchedPath(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#destination CdnFrontdoorRule#destination}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction.property.sourcePattern">sourcePattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#source_pattern CdnFrontdoorRule#source_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction.property.preserveUnmatchedPath">preserveUnmatchedPath</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#preserve_unmatched_path CdnFrontdoorRule#preserve_unmatched_path}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#destination CdnFrontdoorRule#destination}.

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction.property.sourcePattern"></a>

```java
public java.lang.String getSourcePattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#source_pattern CdnFrontdoorRule#source_pattern}.

---

##### `preserveUnmatchedPath`<sup>Optional</sup> <a name="preserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction.property.preserveUnmatchedPath"></a>

```java
public java.lang.Object getPreserveUnmatchedPath();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#preserve_unmatched_path CdnFrontdoorRule#preserve_unmatched_path}.

---

### CdnFrontdoorRuleConditions <a name="CdnFrontdoorRuleConditions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditions;

CdnFrontdoorRuleConditions.builder()
//  .clientPortCondition(IResolvable)
//  .clientPortCondition(java.util.List<CdnFrontdoorRuleConditionsClientPortCondition>)
//  .cookiesCondition(IResolvable)
//  .cookiesCondition(java.util.List<CdnFrontdoorRuleConditionsCookiesCondition>)
//  .hostNameCondition(IResolvable)
//  .hostNameCondition(java.util.List<CdnFrontdoorRuleConditionsHostNameCondition>)
//  .httpVersionCondition(IResolvable)
//  .httpVersionCondition(java.util.List<CdnFrontdoorRuleConditionsHttpVersionCondition>)
//  .isDeviceCondition(IResolvable)
//  .isDeviceCondition(java.util.List<CdnFrontdoorRuleConditionsIsDeviceCondition>)
//  .postArgsCondition(IResolvable)
//  .postArgsCondition(java.util.List<CdnFrontdoorRuleConditionsPostArgsCondition>)
//  .queryStringCondition(IResolvable)
//  .queryStringCondition(java.util.List<CdnFrontdoorRuleConditionsQueryStringCondition>)
//  .remoteAddressCondition(IResolvable)
//  .remoteAddressCondition(java.util.List<CdnFrontdoorRuleConditionsRemoteAddressCondition>)
//  .requestBodyCondition(IResolvable)
//  .requestBodyCondition(java.util.List<CdnFrontdoorRuleConditionsRequestBodyCondition>)
//  .requestHeaderCondition(IResolvable)
//  .requestHeaderCondition(java.util.List<CdnFrontdoorRuleConditionsRequestHeaderCondition>)
//  .requestMethodCondition(IResolvable)
//  .requestMethodCondition(java.util.List<CdnFrontdoorRuleConditionsRequestMethodCondition>)
//  .requestSchemeCondition(IResolvable)
//  .requestSchemeCondition(java.util.List<CdnFrontdoorRuleConditionsRequestSchemeCondition>)
//  .requestUriCondition(IResolvable)
//  .requestUriCondition(java.util.List<CdnFrontdoorRuleConditionsRequestUriCondition>)
//  .serverPortCondition(IResolvable)
//  .serverPortCondition(java.util.List<CdnFrontdoorRuleConditionsServerPortCondition>)
//  .socketAddressCondition(IResolvable)
//  .socketAddressCondition(java.util.List<CdnFrontdoorRuleConditionsSocketAddressCondition>)
//  .sslProtocolCondition(IResolvable)
//  .sslProtocolCondition(java.util.List<CdnFrontdoorRuleConditionsSslProtocolCondition>)
//  .urlFileExtensionCondition(IResolvable)
//  .urlFileExtensionCondition(java.util.List<CdnFrontdoorRuleConditionsUrlFileExtensionCondition>)
//  .urlFilenameCondition(IResolvable)
//  .urlFilenameCondition(java.util.List<CdnFrontdoorRuleConditionsUrlFilenameCondition>)
//  .urlPathCondition(IResolvable)
//  .urlPathCondition(java.util.List<CdnFrontdoorRuleConditionsUrlPathCondition>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.clientPortCondition">clientPortCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition">CdnFrontdoorRuleConditionsClientPortCondition</a>></code> | client_port_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.cookiesCondition">cookiesCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition">CdnFrontdoorRuleConditionsCookiesCondition</a>></code> | cookies_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.hostNameCondition">hostNameCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition">CdnFrontdoorRuleConditionsHostNameCondition</a>></code> | host_name_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.httpVersionCondition">httpVersionCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition">CdnFrontdoorRuleConditionsHttpVersionCondition</a>></code> | http_version_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.isDeviceCondition">isDeviceCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition">CdnFrontdoorRuleConditionsIsDeviceCondition</a>></code> | is_device_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.postArgsCondition">postArgsCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition">CdnFrontdoorRuleConditionsPostArgsCondition</a>></code> | post_args_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.queryStringCondition">queryStringCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition">CdnFrontdoorRuleConditionsQueryStringCondition</a>></code> | query_string_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.remoteAddressCondition">remoteAddressCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition">CdnFrontdoorRuleConditionsRemoteAddressCondition</a>></code> | remote_address_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestBodyCondition">requestBodyCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition">CdnFrontdoorRuleConditionsRequestBodyCondition</a>></code> | request_body_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestHeaderCondition">requestHeaderCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition">CdnFrontdoorRuleConditionsRequestHeaderCondition</a>></code> | request_header_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestMethodCondition">requestMethodCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition">CdnFrontdoorRuleConditionsRequestMethodCondition</a>></code> | request_method_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestSchemeCondition">requestSchemeCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition">CdnFrontdoorRuleConditionsRequestSchemeCondition</a>></code> | request_scheme_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestUriCondition">requestUriCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition">CdnFrontdoorRuleConditionsRequestUriCondition</a>></code> | request_uri_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.serverPortCondition">serverPortCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition">CdnFrontdoorRuleConditionsServerPortCondition</a>></code> | server_port_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.socketAddressCondition">socketAddressCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition">CdnFrontdoorRuleConditionsSocketAddressCondition</a>></code> | socket_address_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.sslProtocolCondition">sslProtocolCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition">CdnFrontdoorRuleConditionsSslProtocolCondition</a>></code> | ssl_protocol_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.urlFileExtensionCondition">urlFileExtensionCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition">CdnFrontdoorRuleConditionsUrlFileExtensionCondition</a>></code> | url_file_extension_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.urlFilenameCondition">urlFilenameCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition">CdnFrontdoorRuleConditionsUrlFilenameCondition</a>></code> | url_filename_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.urlPathCondition">urlPathCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition">CdnFrontdoorRuleConditionsUrlPathCondition</a>></code> | url_path_condition block. |

---

##### `clientPortCondition`<sup>Optional</sup> <a name="clientPortCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.clientPortCondition"></a>

```java
public java.lang.Object getClientPortCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition">CdnFrontdoorRuleConditionsClientPortCondition</a>>

client_port_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#client_port_condition CdnFrontdoorRule#client_port_condition}

---

##### `cookiesCondition`<sup>Optional</sup> <a name="cookiesCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.cookiesCondition"></a>

```java
public java.lang.Object getCookiesCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition">CdnFrontdoorRuleConditionsCookiesCondition</a>>

cookies_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cookies_condition CdnFrontdoorRule#cookies_condition}

---

##### `hostNameCondition`<sup>Optional</sup> <a name="hostNameCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.hostNameCondition"></a>

```java
public java.lang.Object getHostNameCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition">CdnFrontdoorRuleConditionsHostNameCondition</a>>

host_name_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#host_name_condition CdnFrontdoorRule#host_name_condition}

---

##### `httpVersionCondition`<sup>Optional</sup> <a name="httpVersionCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.httpVersionCondition"></a>

```java
public java.lang.Object getHttpVersionCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition">CdnFrontdoorRuleConditionsHttpVersionCondition</a>>

http_version_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#http_version_condition CdnFrontdoorRule#http_version_condition}

---

##### `isDeviceCondition`<sup>Optional</sup> <a name="isDeviceCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.isDeviceCondition"></a>

```java
public java.lang.Object getIsDeviceCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition">CdnFrontdoorRuleConditionsIsDeviceCondition</a>>

is_device_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#is_device_condition CdnFrontdoorRule#is_device_condition}

---

##### `postArgsCondition`<sup>Optional</sup> <a name="postArgsCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.postArgsCondition"></a>

```java
public java.lang.Object getPostArgsCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition">CdnFrontdoorRuleConditionsPostArgsCondition</a>>

post_args_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#post_args_condition CdnFrontdoorRule#post_args_condition}

---

##### `queryStringCondition`<sup>Optional</sup> <a name="queryStringCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.queryStringCondition"></a>

```java
public java.lang.Object getQueryStringCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition">CdnFrontdoorRuleConditionsQueryStringCondition</a>>

query_string_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#query_string_condition CdnFrontdoorRule#query_string_condition}

---

##### `remoteAddressCondition`<sup>Optional</sup> <a name="remoteAddressCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.remoteAddressCondition"></a>

```java
public java.lang.Object getRemoteAddressCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition">CdnFrontdoorRuleConditionsRemoteAddressCondition</a>>

remote_address_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#remote_address_condition CdnFrontdoorRule#remote_address_condition}

---

##### `requestBodyCondition`<sup>Optional</sup> <a name="requestBodyCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestBodyCondition"></a>

```java
public java.lang.Object getRequestBodyCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition">CdnFrontdoorRuleConditionsRequestBodyCondition</a>>

request_body_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#request_body_condition CdnFrontdoorRule#request_body_condition}

---

##### `requestHeaderCondition`<sup>Optional</sup> <a name="requestHeaderCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestHeaderCondition"></a>

```java
public java.lang.Object getRequestHeaderCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition">CdnFrontdoorRuleConditionsRequestHeaderCondition</a>>

request_header_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#request_header_condition CdnFrontdoorRule#request_header_condition}

---

##### `requestMethodCondition`<sup>Optional</sup> <a name="requestMethodCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestMethodCondition"></a>

```java
public java.lang.Object getRequestMethodCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition">CdnFrontdoorRuleConditionsRequestMethodCondition</a>>

request_method_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#request_method_condition CdnFrontdoorRule#request_method_condition}

---

##### `requestSchemeCondition`<sup>Optional</sup> <a name="requestSchemeCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestSchemeCondition"></a>

```java
public java.lang.Object getRequestSchemeCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition">CdnFrontdoorRuleConditionsRequestSchemeCondition</a>>

request_scheme_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#request_scheme_condition CdnFrontdoorRule#request_scheme_condition}

---

##### `requestUriCondition`<sup>Optional</sup> <a name="requestUriCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestUriCondition"></a>

```java
public java.lang.Object getRequestUriCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition">CdnFrontdoorRuleConditionsRequestUriCondition</a>>

request_uri_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#request_uri_condition CdnFrontdoorRule#request_uri_condition}

---

##### `serverPortCondition`<sup>Optional</sup> <a name="serverPortCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.serverPortCondition"></a>

```java
public java.lang.Object getServerPortCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition">CdnFrontdoorRuleConditionsServerPortCondition</a>>

server_port_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#server_port_condition CdnFrontdoorRule#server_port_condition}

---

##### `socketAddressCondition`<sup>Optional</sup> <a name="socketAddressCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.socketAddressCondition"></a>

```java
public java.lang.Object getSocketAddressCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition">CdnFrontdoorRuleConditionsSocketAddressCondition</a>>

socket_address_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#socket_address_condition CdnFrontdoorRule#socket_address_condition}

---

##### `sslProtocolCondition`<sup>Optional</sup> <a name="sslProtocolCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.sslProtocolCondition"></a>

```java
public java.lang.Object getSslProtocolCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition">CdnFrontdoorRuleConditionsSslProtocolCondition</a>>

ssl_protocol_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#ssl_protocol_condition CdnFrontdoorRule#ssl_protocol_condition}

---

##### `urlFileExtensionCondition`<sup>Optional</sup> <a name="urlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.urlFileExtensionCondition"></a>

```java
public java.lang.Object getUrlFileExtensionCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition">CdnFrontdoorRuleConditionsUrlFileExtensionCondition</a>>

url_file_extension_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#url_file_extension_condition CdnFrontdoorRule#url_file_extension_condition}

---

##### `urlFilenameCondition`<sup>Optional</sup> <a name="urlFilenameCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.urlFilenameCondition"></a>

```java
public java.lang.Object getUrlFilenameCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition">CdnFrontdoorRuleConditionsUrlFilenameCondition</a>>

url_filename_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#url_filename_condition CdnFrontdoorRule#url_filename_condition}

---

##### `urlPathCondition`<sup>Optional</sup> <a name="urlPathCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.urlPathCondition"></a>

```java
public java.lang.Object getUrlPathCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition">CdnFrontdoorRuleConditionsUrlPathCondition</a>>

url_path_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#url_path_condition CdnFrontdoorRule#url_path_condition}

---

### CdnFrontdoorRuleConditionsClientPortCondition <a name="CdnFrontdoorRuleConditionsClientPortCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsClientPortCondition;

CdnFrontdoorRuleConditionsClientPortCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

### CdnFrontdoorRuleConditionsCookiesCondition <a name="CdnFrontdoorRuleConditionsCookiesCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsCookiesCondition;

CdnFrontdoorRuleConditionsCookiesCondition.builder()
    .cookieName(java.lang.String)
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cookie_name CdnFrontdoorRule#cookie_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cookie_name CdnFrontdoorRule#cookie_name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

### CdnFrontdoorRuleConditionsHostNameCondition <a name="CdnFrontdoorRuleConditionsHostNameCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsHostNameCondition;

CdnFrontdoorRuleConditionsHostNameCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

### CdnFrontdoorRuleConditionsHttpVersionCondition <a name="CdnFrontdoorRuleConditionsHttpVersionCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsHttpVersionCondition;

CdnFrontdoorRuleConditionsHttpVersionCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

### CdnFrontdoorRuleConditionsIsDeviceCondition <a name="CdnFrontdoorRuleConditionsIsDeviceCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsIsDeviceCondition;

CdnFrontdoorRuleConditionsIsDeviceCondition.builder()
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

### CdnFrontdoorRuleConditionsPostArgsCondition <a name="CdnFrontdoorRuleConditionsPostArgsCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsPostArgsCondition;

CdnFrontdoorRuleConditionsPostArgsCondition.builder()
    .operator(java.lang.String)
    .postArgsName(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.property.postArgsName">postArgsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#post_args_name CdnFrontdoorRule#post_args_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `postArgsName`<sup>Required</sup> <a name="postArgsName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.property.postArgsName"></a>

```java
public java.lang.String getPostArgsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#post_args_name CdnFrontdoorRule#post_args_name}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

### CdnFrontdoorRuleConditionsQueryStringCondition <a name="CdnFrontdoorRuleConditionsQueryStringCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsQueryStringCondition;

CdnFrontdoorRuleConditionsQueryStringCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

### CdnFrontdoorRuleConditionsRemoteAddressCondition <a name="CdnFrontdoorRuleConditionsRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRemoteAddressCondition;

CdnFrontdoorRuleConditionsRemoteAddressCondition.builder()
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

### CdnFrontdoorRuleConditionsRequestBodyCondition <a name="CdnFrontdoorRuleConditionsRequestBodyCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestBodyCondition;

CdnFrontdoorRuleConditionsRequestBodyCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
    .operator(java.lang.String)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

### CdnFrontdoorRuleConditionsRequestHeaderCondition <a name="CdnFrontdoorRuleConditionsRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestHeaderCondition;

CdnFrontdoorRuleConditionsRequestHeaderCondition.builder()
    .headerName(java.lang.String)
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.property.headerName">headerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

### CdnFrontdoorRuleConditionsRequestMethodCondition <a name="CdnFrontdoorRuleConditionsRequestMethodCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestMethodCondition;

CdnFrontdoorRuleConditionsRequestMethodCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

### CdnFrontdoorRuleConditionsRequestSchemeCondition <a name="CdnFrontdoorRuleConditionsRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestSchemeCondition;

CdnFrontdoorRuleConditionsRequestSchemeCondition.builder()
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

### CdnFrontdoorRuleConditionsRequestUriCondition <a name="CdnFrontdoorRuleConditionsRequestUriCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestUriCondition;

CdnFrontdoorRuleConditionsRequestUriCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

### CdnFrontdoorRuleConditionsServerPortCondition <a name="CdnFrontdoorRuleConditionsServerPortCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsServerPortCondition;

CdnFrontdoorRuleConditionsServerPortCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
    .operator(java.lang.String)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

### CdnFrontdoorRuleConditionsSocketAddressCondition <a name="CdnFrontdoorRuleConditionsSocketAddressCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsSocketAddressCondition;

CdnFrontdoorRuleConditionsSocketAddressCondition.builder()
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

### CdnFrontdoorRuleConditionsSslProtocolCondition <a name="CdnFrontdoorRuleConditionsSslProtocolCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsSslProtocolCondition;

CdnFrontdoorRuleConditionsSslProtocolCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

### CdnFrontdoorRuleConditionsUrlFileExtensionCondition <a name="CdnFrontdoorRuleConditionsUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition;

CdnFrontdoorRuleConditionsUrlFileExtensionCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
    .operator(java.lang.String)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

### CdnFrontdoorRuleConditionsUrlFilenameCondition <a name="CdnFrontdoorRuleConditionsUrlFilenameCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsUrlFilenameCondition;

CdnFrontdoorRuleConditionsUrlFilenameCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

### CdnFrontdoorRuleConditionsUrlPathCondition <a name="CdnFrontdoorRuleConditionsUrlPathCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsUrlPathCondition;

CdnFrontdoorRuleConditionsUrlPathCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

### CdnFrontdoorRuleConfig <a name="CdnFrontdoorRuleConfig" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConfig;

CdnFrontdoorRuleConfig.builder()
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
    .actions(CdnFrontdoorRuleActions)
    .cdnFrontdoorRuleSetId(java.lang.String)
    .name(java.lang.String)
    .order(java.lang.Number)
//  .behaviorOnMatch(java.lang.String)
//  .conditions(CdnFrontdoorRuleConditions)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.cdnFrontdoorRuleSetId">cdnFrontdoorRuleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_rule_set_id CdnFrontdoorRule#cdn_frontdoor_rule_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#order CdnFrontdoorRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.behaviorOnMatch">behaviorOnMatch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#behavior_on_match CdnFrontdoorRule#behavior_on_match}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#id CdnFrontdoorRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.actions"></a>

```java
public CdnFrontdoorRuleActions getActions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#actions CdnFrontdoorRule#actions}

---

##### `cdnFrontdoorRuleSetId`<sup>Required</sup> <a name="cdnFrontdoorRuleSetId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.cdnFrontdoorRuleSetId"></a>

```java
public java.lang.String getCdnFrontdoorRuleSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_rule_set_id CdnFrontdoorRule#cdn_frontdoor_rule_set_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#order CdnFrontdoorRule#order}.

---

##### `behaviorOnMatch`<sup>Optional</sup> <a name="behaviorOnMatch" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.behaviorOnMatch"></a>

```java
public java.lang.String getBehaviorOnMatch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#behavior_on_match CdnFrontdoorRule#behavior_on_match}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.conditions"></a>

```java
public CdnFrontdoorRuleConditions getConditions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#conditions CdnFrontdoorRule#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#id CdnFrontdoorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.timeouts"></a>

```java
public CdnFrontdoorRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#timeouts CdnFrontdoorRule#timeouts}

---

### CdnFrontdoorRuleTimeouts <a name="CdnFrontdoorRuleTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleTimeouts;

CdnFrontdoorRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#create CdnFrontdoorRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#delete CdnFrontdoorRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#read CdnFrontdoorRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#update CdnFrontdoorRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#create CdnFrontdoorRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#delete CdnFrontdoorRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#read CdnFrontdoorRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/cdn_frontdoor_rule#update CdnFrontdoorRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorRuleActionsOutputReference <a name="CdnFrontdoorRuleActionsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsOutputReference;

new CdnFrontdoorRuleActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRequestHeaderAction">putRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putResponseHeaderAction">putResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRouteConfigurationOverrideAction">putRouteConfigurationOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRedirectAction">putUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRewriteAction">putUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetRequestHeaderAction">resetRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetResponseHeaderAction">resetResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetRouteConfigurationOverrideAction">resetRouteConfigurationOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRedirectAction">resetUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRewriteAction">resetUrlRewriteAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeaderAction` <a name="putRequestHeaderAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRequestHeaderAction"></a>

```java
public void putRequestHeaderAction(IResolvable OR java.util.List<CdnFrontdoorRuleActionsRequestHeaderAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRequestHeaderAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction">CdnFrontdoorRuleActionsRequestHeaderAction</a>>

---

##### `putResponseHeaderAction` <a name="putResponseHeaderAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putResponseHeaderAction"></a>

```java
public void putResponseHeaderAction(IResolvable OR java.util.List<CdnFrontdoorRuleActionsResponseHeaderAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putResponseHeaderAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction">CdnFrontdoorRuleActionsResponseHeaderAction</a>>

---

##### `putRouteConfigurationOverrideAction` <a name="putRouteConfigurationOverrideAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRouteConfigurationOverrideAction"></a>

```java
public void putRouteConfigurationOverrideAction(CdnFrontdoorRuleActionsRouteConfigurationOverrideAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRouteConfigurationOverrideAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction">CdnFrontdoorRuleActionsRouteConfigurationOverrideAction</a>

---

##### `putUrlRedirectAction` <a name="putUrlRedirectAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRedirectAction"></a>

```java
public void putUrlRedirectAction(CdnFrontdoorRuleActionsUrlRedirectAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction">CdnFrontdoorRuleActionsUrlRedirectAction</a>

---

##### `putUrlRewriteAction` <a name="putUrlRewriteAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRewriteAction"></a>

```java
public void putUrlRewriteAction(CdnFrontdoorRuleActionsUrlRewriteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRewriteAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction">CdnFrontdoorRuleActionsUrlRewriteAction</a>

---

##### `resetRequestHeaderAction` <a name="resetRequestHeaderAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetRequestHeaderAction"></a>

```java
public void resetRequestHeaderAction()
```

##### `resetResponseHeaderAction` <a name="resetResponseHeaderAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetResponseHeaderAction"></a>

```java
public void resetResponseHeaderAction()
```

##### `resetRouteConfigurationOverrideAction` <a name="resetRouteConfigurationOverrideAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetRouteConfigurationOverrideAction"></a>

```java
public void resetRouteConfigurationOverrideAction()
```

##### `resetUrlRedirectAction` <a name="resetUrlRedirectAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRedirectAction"></a>

```java
public void resetUrlRedirectAction()
```

##### `resetUrlRewriteAction` <a name="resetUrlRewriteAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRewriteAction"></a>

```java
public void resetUrlRewriteAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.requestHeaderAction">requestHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList">CdnFrontdoorRuleActionsRequestHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.responseHeaderAction">responseHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList">CdnFrontdoorRuleActionsResponseHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverrideAction">routeConfigurationOverrideAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirectAction">urlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference">CdnFrontdoorRuleActionsUrlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewriteAction">urlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference">CdnFrontdoorRuleActionsUrlRewriteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.requestHeaderActionInput">requestHeaderActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction">CdnFrontdoorRuleActionsRequestHeaderAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.responseHeaderActionInput">responseHeaderActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction">CdnFrontdoorRuleActionsResponseHeaderAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverrideActionInput">routeConfigurationOverrideActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction">CdnFrontdoorRuleActionsRouteConfigurationOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirectActionInput">urlRedirectActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction">CdnFrontdoorRuleActionsUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewriteActionInput">urlRewriteActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction">CdnFrontdoorRuleActionsUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestHeaderAction`<sup>Required</sup> <a name="requestHeaderAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.requestHeaderAction"></a>

```java
public CdnFrontdoorRuleActionsRequestHeaderActionList getRequestHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList">CdnFrontdoorRuleActionsRequestHeaderActionList</a>

---

##### `responseHeaderAction`<sup>Required</sup> <a name="responseHeaderAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.responseHeaderAction"></a>

```java
public CdnFrontdoorRuleActionsResponseHeaderActionList getResponseHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList">CdnFrontdoorRuleActionsResponseHeaderActionList</a>

---

##### `routeConfigurationOverrideAction`<sup>Required</sup> <a name="routeConfigurationOverrideAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverrideAction"></a>

```java
public CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference getRouteConfigurationOverrideAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference</a>

---

##### `urlRedirectAction`<sup>Required</sup> <a name="urlRedirectAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirectAction"></a>

```java
public CdnFrontdoorRuleActionsUrlRedirectActionOutputReference getUrlRedirectAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference">CdnFrontdoorRuleActionsUrlRedirectActionOutputReference</a>

---

##### `urlRewriteAction`<sup>Required</sup> <a name="urlRewriteAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewriteAction"></a>

```java
public CdnFrontdoorRuleActionsUrlRewriteActionOutputReference getUrlRewriteAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference">CdnFrontdoorRuleActionsUrlRewriteActionOutputReference</a>

---

##### `requestHeaderActionInput`<sup>Optional</sup> <a name="requestHeaderActionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.requestHeaderActionInput"></a>

```java
public java.lang.Object getRequestHeaderActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction">CdnFrontdoorRuleActionsRequestHeaderAction</a>>

---

##### `responseHeaderActionInput`<sup>Optional</sup> <a name="responseHeaderActionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.responseHeaderActionInput"></a>

```java
public java.lang.Object getResponseHeaderActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction">CdnFrontdoorRuleActionsResponseHeaderAction</a>>

---

##### `routeConfigurationOverrideActionInput`<sup>Optional</sup> <a name="routeConfigurationOverrideActionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverrideActionInput"></a>

```java
public CdnFrontdoorRuleActionsRouteConfigurationOverrideAction getRouteConfigurationOverrideActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction">CdnFrontdoorRuleActionsRouteConfigurationOverrideAction</a>

---

##### `urlRedirectActionInput`<sup>Optional</sup> <a name="urlRedirectActionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirectActionInput"></a>

```java
public CdnFrontdoorRuleActionsUrlRedirectAction getUrlRedirectActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction">CdnFrontdoorRuleActionsUrlRedirectAction</a>

---

##### `urlRewriteActionInput`<sup>Optional</sup> <a name="urlRewriteActionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewriteActionInput"></a>

```java
public CdnFrontdoorRuleActionsUrlRewriteAction getUrlRewriteActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction">CdnFrontdoorRuleActionsUrlRewriteAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorRuleActions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

---


### CdnFrontdoorRuleActionsRequestHeaderActionList <a name="CdnFrontdoorRuleActionsRequestHeaderActionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsRequestHeaderActionList;

new CdnFrontdoorRuleActionsRequestHeaderActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.get"></a>

```java
public CdnFrontdoorRuleActionsRequestHeaderActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction">CdnFrontdoorRuleActionsRequestHeaderAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction">CdnFrontdoorRuleActionsRequestHeaderAction</a>>

---


### CdnFrontdoorRuleActionsRequestHeaderActionOutputReference <a name="CdnFrontdoorRuleActionsRequestHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference;

new CdnFrontdoorRuleActionsRequestHeaderActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.headerActionInput">headerActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.headerAction">headerAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction">CdnFrontdoorRuleActionsRequestHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerActionInput`<sup>Optional</sup> <a name="headerActionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.headerActionInput"></a>

```java
public java.lang.String getHeaderActionInput();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `headerAction`<sup>Required</sup> <a name="headerAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.headerAction"></a>

```java
public java.lang.String getHeaderAction();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRequestHeaderAction">CdnFrontdoorRuleActionsRequestHeaderAction</a>

---


### CdnFrontdoorRuleActionsResponseHeaderActionList <a name="CdnFrontdoorRuleActionsResponseHeaderActionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsResponseHeaderActionList;

new CdnFrontdoorRuleActionsResponseHeaderActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.get"></a>

```java
public CdnFrontdoorRuleActionsResponseHeaderActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction">CdnFrontdoorRuleActionsResponseHeaderAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction">CdnFrontdoorRuleActionsResponseHeaderAction</a>>

---


### CdnFrontdoorRuleActionsResponseHeaderActionOutputReference <a name="CdnFrontdoorRuleActionsResponseHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference;

new CdnFrontdoorRuleActionsResponseHeaderActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.headerActionInput">headerActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.headerAction">headerAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction">CdnFrontdoorRuleActionsResponseHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerActionInput`<sup>Optional</sup> <a name="headerActionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.headerActionInput"></a>

```java
public java.lang.String getHeaderActionInput();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `headerAction`<sup>Required</sup> <a name="headerAction" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.headerAction"></a>

```java
public java.lang.String getHeaderAction();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsResponseHeaderAction">CdnFrontdoorRuleActionsResponseHeaderAction</a>

---


### CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference;

new CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetCacheBehavior">resetCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetCacheDuration">resetCacheDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetCdnFrontdoorOriginGroupId">resetCdnFrontdoorOriginGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetCompressionEnabled">resetCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetForwardingProtocol">resetForwardingProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetQueryStringCachingBehavior">resetQueryStringCachingBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetQueryStringParameters">resetQueryStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheBehavior` <a name="resetCacheBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetCacheBehavior"></a>

```java
public void resetCacheBehavior()
```

##### `resetCacheDuration` <a name="resetCacheDuration" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetCacheDuration"></a>

```java
public void resetCacheDuration()
```

##### `resetCdnFrontdoorOriginGroupId` <a name="resetCdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetCdnFrontdoorOriginGroupId"></a>

```java
public void resetCdnFrontdoorOriginGroupId()
```

##### `resetCompressionEnabled` <a name="resetCompressionEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetCompressionEnabled"></a>

```java
public void resetCompressionEnabled()
```

##### `resetForwardingProtocol` <a name="resetForwardingProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetForwardingProtocol"></a>

```java
public void resetForwardingProtocol()
```

##### `resetQueryStringCachingBehavior` <a name="resetQueryStringCachingBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetQueryStringCachingBehavior"></a>

```java
public void resetQueryStringCachingBehavior()
```

##### `resetQueryStringParameters` <a name="resetQueryStringParameters" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.resetQueryStringParameters"></a>

```java
public void resetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cacheBehaviorInput">cacheBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cacheDurationInput">cacheDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cdnFrontdoorOriginGroupIdInput">cdnFrontdoorOriginGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.compressionEnabledInput">compressionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.forwardingProtocolInput">forwardingProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.queryStringCachingBehaviorInput">queryStringCachingBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.queryStringParametersInput">queryStringParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cacheBehavior">cacheBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cacheDuration">cacheDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cdnFrontdoorOriginGroupId">cdnFrontdoorOriginGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.compressionEnabled">compressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.forwardingProtocol">forwardingProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.queryStringCachingBehavior">queryStringCachingBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.queryStringParameters">queryStringParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction">CdnFrontdoorRuleActionsRouteConfigurationOverrideAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheBehaviorInput`<sup>Optional</sup> <a name="cacheBehaviorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cacheBehaviorInput"></a>

```java
public java.lang.String getCacheBehaviorInput();
```

- *Type:* java.lang.String

---

##### `cacheDurationInput`<sup>Optional</sup> <a name="cacheDurationInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cacheDurationInput"></a>

```java
public java.lang.String getCacheDurationInput();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorOriginGroupIdInput`<sup>Optional</sup> <a name="cdnFrontdoorOriginGroupIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cdnFrontdoorOriginGroupIdInput"></a>

```java
public java.lang.String getCdnFrontdoorOriginGroupIdInput();
```

- *Type:* java.lang.String

---

##### `compressionEnabledInput`<sup>Optional</sup> <a name="compressionEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.compressionEnabledInput"></a>

```java
public java.lang.Object getCompressionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardingProtocolInput`<sup>Optional</sup> <a name="forwardingProtocolInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.forwardingProtocolInput"></a>

```java
public java.lang.String getForwardingProtocolInput();
```

- *Type:* java.lang.String

---

##### `queryStringCachingBehaviorInput`<sup>Optional</sup> <a name="queryStringCachingBehaviorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.queryStringCachingBehaviorInput"></a>

```java
public java.lang.String getQueryStringCachingBehaviorInput();
```

- *Type:* java.lang.String

---

##### `queryStringParametersInput`<sup>Optional</sup> <a name="queryStringParametersInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.queryStringParametersInput"></a>

```java
public java.util.List<java.lang.String> getQueryStringParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheBehavior`<sup>Required</sup> <a name="cacheBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cacheBehavior"></a>

```java
public java.lang.String getCacheBehavior();
```

- *Type:* java.lang.String

---

##### `cacheDuration`<sup>Required</sup> <a name="cacheDuration" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cacheDuration"></a>

```java
public java.lang.String getCacheDuration();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="cdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.cdnFrontdoorOriginGroupId"></a>

```java
public java.lang.String getCdnFrontdoorOriginGroupId();
```

- *Type:* java.lang.String

---

##### `compressionEnabled`<sup>Required</sup> <a name="compressionEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.compressionEnabled"></a>

```java
public java.lang.Object getCompressionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardingProtocol`<sup>Required</sup> <a name="forwardingProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.forwardingProtocol"></a>

```java
public java.lang.String getForwardingProtocol();
```

- *Type:* java.lang.String

---

##### `queryStringCachingBehavior`<sup>Required</sup> <a name="queryStringCachingBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.queryStringCachingBehavior"></a>

```java
public java.lang.String getQueryStringCachingBehavior();
```

- *Type:* java.lang.String

---

##### `queryStringParameters`<sup>Required</sup> <a name="queryStringParameters" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.queryStringParameters"></a>

```java
public java.util.List<java.lang.String> getQueryStringParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorRuleActionsRouteConfigurationOverrideAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideAction">CdnFrontdoorRuleActionsRouteConfigurationOverrideAction</a>

---


### CdnFrontdoorRuleActionsUrlRedirectActionOutputReference <a name="CdnFrontdoorRuleActionsUrlRedirectActionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference;

new CdnFrontdoorRuleActionsUrlRedirectActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resetDestinationFragment">resetDestinationFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resetRedirectProtocol">resetRedirectProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationFragment` <a name="resetDestinationFragment" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resetDestinationFragment"></a>

```java
public void resetDestinationFragment()
```

##### `resetDestinationPath` <a name="resetDestinationPath" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resetDestinationPath"></a>

```java
public void resetDestinationPath()
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resetQueryString"></a>

```java
public void resetQueryString()
```

##### `resetRedirectProtocol` <a name="resetRedirectProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.resetRedirectProtocol"></a>

```java
public void resetRedirectProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationFragmentInput">destinationFragmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationHostnameInput">destinationHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.redirectProtocolInput">redirectProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.redirectTypeInput">redirectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationFragment">destinationFragment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationHostname">destinationHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationPath">destinationPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.queryString">queryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.redirectProtocol">redirectProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.redirectType">redirectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction">CdnFrontdoorRuleActionsUrlRedirectAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationFragmentInput`<sup>Optional</sup> <a name="destinationFragmentInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationFragmentInput"></a>

```java
public java.lang.String getDestinationFragmentInput();
```

- *Type:* java.lang.String

---

##### `destinationHostnameInput`<sup>Optional</sup> <a name="destinationHostnameInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationHostnameInput"></a>

```java
public java.lang.String getDestinationHostnameInput();
```

- *Type:* java.lang.String

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationPathInput"></a>

```java
public java.lang.String getDestinationPathInput();
```

- *Type:* java.lang.String

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.queryStringInput"></a>

```java
public java.lang.String getQueryStringInput();
```

- *Type:* java.lang.String

---

##### `redirectProtocolInput`<sup>Optional</sup> <a name="redirectProtocolInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.redirectProtocolInput"></a>

```java
public java.lang.String getRedirectProtocolInput();
```

- *Type:* java.lang.String

---

##### `redirectTypeInput`<sup>Optional</sup> <a name="redirectTypeInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.redirectTypeInput"></a>

```java
public java.lang.String getRedirectTypeInput();
```

- *Type:* java.lang.String

---

##### `destinationFragment`<sup>Required</sup> <a name="destinationFragment" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationFragment"></a>

```java
public java.lang.String getDestinationFragment();
```

- *Type:* java.lang.String

---

##### `destinationHostname`<sup>Required</sup> <a name="destinationHostname" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationHostname"></a>

```java
public java.lang.String getDestinationHostname();
```

- *Type:* java.lang.String

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.destinationPath"></a>

```java
public java.lang.String getDestinationPath();
```

- *Type:* java.lang.String

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

---

##### `redirectProtocol`<sup>Required</sup> <a name="redirectProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.redirectProtocol"></a>

```java
public java.lang.String getRedirectProtocol();
```

- *Type:* java.lang.String

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.redirectType"></a>

```java
public java.lang.String getRedirectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectActionOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorRuleActionsUrlRedirectAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectAction">CdnFrontdoorRuleActionsUrlRedirectAction</a>

---


### CdnFrontdoorRuleActionsUrlRewriteActionOutputReference <a name="CdnFrontdoorRuleActionsUrlRewriteActionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference;

new CdnFrontdoorRuleActionsUrlRewriteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.resetPreserveUnmatchedPath">resetPreserveUnmatchedPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveUnmatchedPath` <a name="resetPreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.resetPreserveUnmatchedPath"></a>

```java
public void resetPreserveUnmatchedPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput">preserveUnmatchedPathInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.sourcePatternInput">sourcePatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.preserveUnmatchedPath">preserveUnmatchedPath</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.sourcePattern">sourcePattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction">CdnFrontdoorRuleActionsUrlRewriteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `preserveUnmatchedPathInput`<sup>Optional</sup> <a name="preserveUnmatchedPathInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput"></a>

```java
public java.lang.Object getPreserveUnmatchedPathInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourcePatternInput`<sup>Optional</sup> <a name="sourcePatternInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.sourcePatternInput"></a>

```java
public java.lang.String getSourcePatternInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `preserveUnmatchedPath`<sup>Required</sup> <a name="preserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.preserveUnmatchedPath"></a>

```java
public java.lang.Object getPreserveUnmatchedPath();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.sourcePattern"></a>

```java
public java.lang.String getSourcePattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteActionOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorRuleActionsUrlRewriteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteAction">CdnFrontdoorRuleActionsUrlRewriteAction</a>

---


### CdnFrontdoorRuleConditionsClientPortConditionList <a name="CdnFrontdoorRuleConditionsClientPortConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsClientPortConditionList;

new CdnFrontdoorRuleConditionsClientPortConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsClientPortConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition">CdnFrontdoorRuleConditionsClientPortCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition">CdnFrontdoorRuleConditionsClientPortCondition</a>>

---


### CdnFrontdoorRuleConditionsClientPortConditionOutputReference <a name="CdnFrontdoorRuleConditionsClientPortConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference;

new CdnFrontdoorRuleConditionsClientPortConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition">CdnFrontdoorRuleConditionsClientPortCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition">CdnFrontdoorRuleConditionsClientPortCondition</a>

---


### CdnFrontdoorRuleConditionsCookiesConditionList <a name="CdnFrontdoorRuleConditionsCookiesConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsCookiesConditionList;

new CdnFrontdoorRuleConditionsCookiesConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsCookiesConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition">CdnFrontdoorRuleConditionsCookiesCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition">CdnFrontdoorRuleConditionsCookiesCondition</a>>

---


### CdnFrontdoorRuleConditionsCookiesConditionOutputReference <a name="CdnFrontdoorRuleConditionsCookiesConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference;

new CdnFrontdoorRuleConditionsCookiesConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition">CdnFrontdoorRuleConditionsCookiesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.cookieNameInput"></a>

```java
public java.lang.String getCookieNameInput();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition">CdnFrontdoorRuleConditionsCookiesCondition</a>

---


### CdnFrontdoorRuleConditionsHostNameConditionList <a name="CdnFrontdoorRuleConditionsHostNameConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsHostNameConditionList;

new CdnFrontdoorRuleConditionsHostNameConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsHostNameConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition">CdnFrontdoorRuleConditionsHostNameCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition">CdnFrontdoorRuleConditionsHostNameCondition</a>>

---


### CdnFrontdoorRuleConditionsHostNameConditionOutputReference <a name="CdnFrontdoorRuleConditionsHostNameConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference;

new CdnFrontdoorRuleConditionsHostNameConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition">CdnFrontdoorRuleConditionsHostNameCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition">CdnFrontdoorRuleConditionsHostNameCondition</a>

---


### CdnFrontdoorRuleConditionsHttpVersionConditionList <a name="CdnFrontdoorRuleConditionsHttpVersionConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsHttpVersionConditionList;

new CdnFrontdoorRuleConditionsHttpVersionConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition">CdnFrontdoorRuleConditionsHttpVersionCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition">CdnFrontdoorRuleConditionsHttpVersionCondition</a>>

---


### CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference <a name="CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference;

new CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition">CdnFrontdoorRuleConditionsHttpVersionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition">CdnFrontdoorRuleConditionsHttpVersionCondition</a>

---


### CdnFrontdoorRuleConditionsIsDeviceConditionList <a name="CdnFrontdoorRuleConditionsIsDeviceConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsIsDeviceConditionList;

new CdnFrontdoorRuleConditionsIsDeviceConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition">CdnFrontdoorRuleConditionsIsDeviceCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition">CdnFrontdoorRuleConditionsIsDeviceCondition</a>>

---


### CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference <a name="CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference;

new CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition">CdnFrontdoorRuleConditionsIsDeviceCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition">CdnFrontdoorRuleConditionsIsDeviceCondition</a>

---


### CdnFrontdoorRuleConditionsOutputReference <a name="CdnFrontdoorRuleConditionsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsOutputReference;

new CdnFrontdoorRuleConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putClientPortCondition">putClientPortCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putCookiesCondition">putCookiesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHostNameCondition">putHostNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHttpVersionCondition">putHttpVersionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putIsDeviceCondition">putIsDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putPostArgsCondition">putPostArgsCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putQueryStringCondition">putQueryStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRemoteAddressCondition">putRemoteAddressCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestBodyCondition">putRequestBodyCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestHeaderCondition">putRequestHeaderCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestMethodCondition">putRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestSchemeCondition">putRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestUriCondition">putRequestUriCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putServerPortCondition">putServerPortCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSocketAddressCondition">putSocketAddressCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSslProtocolCondition">putSslProtocolCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putUrlFileExtensionCondition">putUrlFileExtensionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putUrlFilenameCondition">putUrlFilenameCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putUrlPathCondition">putUrlPathCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetClientPortCondition">resetClientPortCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetCookiesCondition">resetCookiesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHostNameCondition">resetHostNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHttpVersionCondition">resetHttpVersionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetIsDeviceCondition">resetIsDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetPostArgsCondition">resetPostArgsCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetQueryStringCondition">resetQueryStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRemoteAddressCondition">resetRemoteAddressCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestBodyCondition">resetRequestBodyCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestHeaderCondition">resetRequestHeaderCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestMethodCondition">resetRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestSchemeCondition">resetRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestUriCondition">resetRequestUriCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetServerPortCondition">resetServerPortCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSocketAddressCondition">resetSocketAddressCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSslProtocolCondition">resetSslProtocolCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetUrlFileExtensionCondition">resetUrlFileExtensionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetUrlFilenameCondition">resetUrlFilenameCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetUrlPathCondition">resetUrlPathCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientPortCondition` <a name="putClientPortCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putClientPortCondition"></a>

```java
public void putClientPortCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsClientPortCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putClientPortCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition">CdnFrontdoorRuleConditionsClientPortCondition</a>>

---

##### `putCookiesCondition` <a name="putCookiesCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putCookiesCondition"></a>

```java
public void putCookiesCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsCookiesCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putCookiesCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition">CdnFrontdoorRuleConditionsCookiesCondition</a>>

---

##### `putHostNameCondition` <a name="putHostNameCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHostNameCondition"></a>

```java
public void putHostNameCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsHostNameCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHostNameCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition">CdnFrontdoorRuleConditionsHostNameCondition</a>>

---

##### `putHttpVersionCondition` <a name="putHttpVersionCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHttpVersionCondition"></a>

```java
public void putHttpVersionCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsHttpVersionCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHttpVersionCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition">CdnFrontdoorRuleConditionsHttpVersionCondition</a>>

---

##### `putIsDeviceCondition` <a name="putIsDeviceCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putIsDeviceCondition"></a>

```java
public void putIsDeviceCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsIsDeviceCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putIsDeviceCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition">CdnFrontdoorRuleConditionsIsDeviceCondition</a>>

---

##### `putPostArgsCondition` <a name="putPostArgsCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putPostArgsCondition"></a>

```java
public void putPostArgsCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsPostArgsCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putPostArgsCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition">CdnFrontdoorRuleConditionsPostArgsCondition</a>>

---

##### `putQueryStringCondition` <a name="putQueryStringCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putQueryStringCondition"></a>

```java
public void putQueryStringCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsQueryStringCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putQueryStringCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition">CdnFrontdoorRuleConditionsQueryStringCondition</a>>

---

##### `putRemoteAddressCondition` <a name="putRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRemoteAddressCondition"></a>

```java
public void putRemoteAddressCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsRemoteAddressCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRemoteAddressCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition">CdnFrontdoorRuleConditionsRemoteAddressCondition</a>>

---

##### `putRequestBodyCondition` <a name="putRequestBodyCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestBodyCondition"></a>

```java
public void putRequestBodyCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsRequestBodyCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestBodyCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition">CdnFrontdoorRuleConditionsRequestBodyCondition</a>>

---

##### `putRequestHeaderCondition` <a name="putRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestHeaderCondition"></a>

```java
public void putRequestHeaderCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsRequestHeaderCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestHeaderCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition">CdnFrontdoorRuleConditionsRequestHeaderCondition</a>>

---

##### `putRequestMethodCondition` <a name="putRequestMethodCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestMethodCondition"></a>

```java
public void putRequestMethodCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsRequestMethodCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestMethodCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition">CdnFrontdoorRuleConditionsRequestMethodCondition</a>>

---

##### `putRequestSchemeCondition` <a name="putRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestSchemeCondition"></a>

```java
public void putRequestSchemeCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsRequestSchemeCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestSchemeCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition">CdnFrontdoorRuleConditionsRequestSchemeCondition</a>>

---

##### `putRequestUriCondition` <a name="putRequestUriCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestUriCondition"></a>

```java
public void putRequestUriCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsRequestUriCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestUriCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition">CdnFrontdoorRuleConditionsRequestUriCondition</a>>

---

##### `putServerPortCondition` <a name="putServerPortCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putServerPortCondition"></a>

```java
public void putServerPortCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsServerPortCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putServerPortCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition">CdnFrontdoorRuleConditionsServerPortCondition</a>>

---

##### `putSocketAddressCondition` <a name="putSocketAddressCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSocketAddressCondition"></a>

```java
public void putSocketAddressCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsSocketAddressCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSocketAddressCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition">CdnFrontdoorRuleConditionsSocketAddressCondition</a>>

---

##### `putSslProtocolCondition` <a name="putSslProtocolCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSslProtocolCondition"></a>

```java
public void putSslProtocolCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsSslProtocolCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSslProtocolCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition">CdnFrontdoorRuleConditionsSslProtocolCondition</a>>

---

##### `putUrlFileExtensionCondition` <a name="putUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putUrlFileExtensionCondition"></a>

```java
public void putUrlFileExtensionCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsUrlFileExtensionCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putUrlFileExtensionCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition">CdnFrontdoorRuleConditionsUrlFileExtensionCondition</a>>

---

##### `putUrlFilenameCondition` <a name="putUrlFilenameCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putUrlFilenameCondition"></a>

```java
public void putUrlFilenameCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsUrlFilenameCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putUrlFilenameCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition">CdnFrontdoorRuleConditionsUrlFilenameCondition</a>>

---

##### `putUrlPathCondition` <a name="putUrlPathCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putUrlPathCondition"></a>

```java
public void putUrlPathCondition(IResolvable OR java.util.List<CdnFrontdoorRuleConditionsUrlPathCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putUrlPathCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition">CdnFrontdoorRuleConditionsUrlPathCondition</a>>

---

##### `resetClientPortCondition` <a name="resetClientPortCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetClientPortCondition"></a>

```java
public void resetClientPortCondition()
```

##### `resetCookiesCondition` <a name="resetCookiesCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetCookiesCondition"></a>

```java
public void resetCookiesCondition()
```

##### `resetHostNameCondition` <a name="resetHostNameCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHostNameCondition"></a>

```java
public void resetHostNameCondition()
```

##### `resetHttpVersionCondition` <a name="resetHttpVersionCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHttpVersionCondition"></a>

```java
public void resetHttpVersionCondition()
```

##### `resetIsDeviceCondition` <a name="resetIsDeviceCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetIsDeviceCondition"></a>

```java
public void resetIsDeviceCondition()
```

##### `resetPostArgsCondition` <a name="resetPostArgsCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetPostArgsCondition"></a>

```java
public void resetPostArgsCondition()
```

##### `resetQueryStringCondition` <a name="resetQueryStringCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetQueryStringCondition"></a>

```java
public void resetQueryStringCondition()
```

##### `resetRemoteAddressCondition` <a name="resetRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRemoteAddressCondition"></a>

```java
public void resetRemoteAddressCondition()
```

##### `resetRequestBodyCondition` <a name="resetRequestBodyCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestBodyCondition"></a>

```java
public void resetRequestBodyCondition()
```

##### `resetRequestHeaderCondition` <a name="resetRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestHeaderCondition"></a>

```java
public void resetRequestHeaderCondition()
```

##### `resetRequestMethodCondition` <a name="resetRequestMethodCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestMethodCondition"></a>

```java
public void resetRequestMethodCondition()
```

##### `resetRequestSchemeCondition` <a name="resetRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestSchemeCondition"></a>

```java
public void resetRequestSchemeCondition()
```

##### `resetRequestUriCondition` <a name="resetRequestUriCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestUriCondition"></a>

```java
public void resetRequestUriCondition()
```

##### `resetServerPortCondition` <a name="resetServerPortCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetServerPortCondition"></a>

```java
public void resetServerPortCondition()
```

##### `resetSocketAddressCondition` <a name="resetSocketAddressCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSocketAddressCondition"></a>

```java
public void resetSocketAddressCondition()
```

##### `resetSslProtocolCondition` <a name="resetSslProtocolCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSslProtocolCondition"></a>

```java
public void resetSslProtocolCondition()
```

##### `resetUrlFileExtensionCondition` <a name="resetUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetUrlFileExtensionCondition"></a>

```java
public void resetUrlFileExtensionCondition()
```

##### `resetUrlFilenameCondition` <a name="resetUrlFilenameCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetUrlFilenameCondition"></a>

```java
public void resetUrlFilenameCondition()
```

##### `resetUrlPathCondition` <a name="resetUrlPathCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetUrlPathCondition"></a>

```java
public void resetUrlPathCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPortCondition">clientPortCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList">CdnFrontdoorRuleConditionsClientPortConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.cookiesCondition">cookiesCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList">CdnFrontdoorRuleConditionsCookiesConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostNameCondition">hostNameCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList">CdnFrontdoorRuleConditionsHostNameConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersionCondition">httpVersionCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList">CdnFrontdoorRuleConditionsHttpVersionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.isDeviceCondition">isDeviceCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList">CdnFrontdoorRuleConditionsIsDeviceConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgsCondition">postArgsCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList">CdnFrontdoorRuleConditionsPostArgsConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryStringCondition">queryStringCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList">CdnFrontdoorRuleConditionsQueryStringConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddressCondition">remoteAddressCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList">CdnFrontdoorRuleConditionsRemoteAddressConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBodyCondition">requestBodyCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList">CdnFrontdoorRuleConditionsRequestBodyConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeaderCondition">requestHeaderCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList">CdnFrontdoorRuleConditionsRequestHeaderConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethodCondition">requestMethodCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList">CdnFrontdoorRuleConditionsRequestMethodConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestSchemeCondition">requestSchemeCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList">CdnFrontdoorRuleConditionsRequestSchemeConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUriCondition">requestUriCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList">CdnFrontdoorRuleConditionsRequestUriConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPortCondition">serverPortCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList">CdnFrontdoorRuleConditionsServerPortConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddressCondition">socketAddressCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList">CdnFrontdoorRuleConditionsSocketAddressConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocolCondition">sslProtocolCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList">CdnFrontdoorRuleConditionsSslProtocolConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlFileExtensionCondition">urlFileExtensionCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList">CdnFrontdoorRuleConditionsUrlFileExtensionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlFilenameCondition">urlFilenameCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList">CdnFrontdoorRuleConditionsUrlFilenameConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlPathCondition">urlPathCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList">CdnFrontdoorRuleConditionsUrlPathConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPortConditionInput">clientPortConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition">CdnFrontdoorRuleConditionsClientPortCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.cookiesConditionInput">cookiesConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition">CdnFrontdoorRuleConditionsCookiesCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostNameConditionInput">hostNameConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition">CdnFrontdoorRuleConditionsHostNameCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersionConditionInput">httpVersionConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition">CdnFrontdoorRuleConditionsHttpVersionCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.isDeviceConditionInput">isDeviceConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition">CdnFrontdoorRuleConditionsIsDeviceCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgsConditionInput">postArgsConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition">CdnFrontdoorRuleConditionsPostArgsCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryStringConditionInput">queryStringConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition">CdnFrontdoorRuleConditionsQueryStringCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddressConditionInput">remoteAddressConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition">CdnFrontdoorRuleConditionsRemoteAddressCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBodyConditionInput">requestBodyConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition">CdnFrontdoorRuleConditionsRequestBodyCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeaderConditionInput">requestHeaderConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition">CdnFrontdoorRuleConditionsRequestHeaderCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethodConditionInput">requestMethodConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition">CdnFrontdoorRuleConditionsRequestMethodCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestSchemeConditionInput">requestSchemeConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition">CdnFrontdoorRuleConditionsRequestSchemeCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUriConditionInput">requestUriConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition">CdnFrontdoorRuleConditionsRequestUriCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPortConditionInput">serverPortConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition">CdnFrontdoorRuleConditionsServerPortCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddressConditionInput">socketAddressConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition">CdnFrontdoorRuleConditionsSocketAddressCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocolConditionInput">sslProtocolConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition">CdnFrontdoorRuleConditionsSslProtocolCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlFileExtensionConditionInput">urlFileExtensionConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition">CdnFrontdoorRuleConditionsUrlFileExtensionCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlFilenameConditionInput">urlFilenameConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition">CdnFrontdoorRuleConditionsUrlFilenameCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlPathConditionInput">urlPathConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition">CdnFrontdoorRuleConditionsUrlPathCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientPortCondition`<sup>Required</sup> <a name="clientPortCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPortCondition"></a>

```java
public CdnFrontdoorRuleConditionsClientPortConditionList getClientPortCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortConditionList">CdnFrontdoorRuleConditionsClientPortConditionList</a>

---

##### `cookiesCondition`<sup>Required</sup> <a name="cookiesCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.cookiesCondition"></a>

```java
public CdnFrontdoorRuleConditionsCookiesConditionList getCookiesCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesConditionList">CdnFrontdoorRuleConditionsCookiesConditionList</a>

---

##### `hostNameCondition`<sup>Required</sup> <a name="hostNameCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostNameCondition"></a>

```java
public CdnFrontdoorRuleConditionsHostNameConditionList getHostNameCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameConditionList">CdnFrontdoorRuleConditionsHostNameConditionList</a>

---

##### `httpVersionCondition`<sup>Required</sup> <a name="httpVersionCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersionCondition"></a>

```java
public CdnFrontdoorRuleConditionsHttpVersionConditionList getHttpVersionCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionConditionList">CdnFrontdoorRuleConditionsHttpVersionConditionList</a>

---

##### `isDeviceCondition`<sup>Required</sup> <a name="isDeviceCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.isDeviceCondition"></a>

```java
public CdnFrontdoorRuleConditionsIsDeviceConditionList getIsDeviceCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceConditionList">CdnFrontdoorRuleConditionsIsDeviceConditionList</a>

---

##### `postArgsCondition`<sup>Required</sup> <a name="postArgsCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgsCondition"></a>

```java
public CdnFrontdoorRuleConditionsPostArgsConditionList getPostArgsCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList">CdnFrontdoorRuleConditionsPostArgsConditionList</a>

---

##### `queryStringCondition`<sup>Required</sup> <a name="queryStringCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryStringCondition"></a>

```java
public CdnFrontdoorRuleConditionsQueryStringConditionList getQueryStringCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList">CdnFrontdoorRuleConditionsQueryStringConditionList</a>

---

##### `remoteAddressCondition`<sup>Required</sup> <a name="remoteAddressCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddressCondition"></a>

```java
public CdnFrontdoorRuleConditionsRemoteAddressConditionList getRemoteAddressCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList">CdnFrontdoorRuleConditionsRemoteAddressConditionList</a>

---

##### `requestBodyCondition`<sup>Required</sup> <a name="requestBodyCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBodyCondition"></a>

```java
public CdnFrontdoorRuleConditionsRequestBodyConditionList getRequestBodyCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList">CdnFrontdoorRuleConditionsRequestBodyConditionList</a>

---

##### `requestHeaderCondition`<sup>Required</sup> <a name="requestHeaderCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeaderCondition"></a>

```java
public CdnFrontdoorRuleConditionsRequestHeaderConditionList getRequestHeaderCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList">CdnFrontdoorRuleConditionsRequestHeaderConditionList</a>

---

##### `requestMethodCondition`<sup>Required</sup> <a name="requestMethodCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethodCondition"></a>

```java
public CdnFrontdoorRuleConditionsRequestMethodConditionList getRequestMethodCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList">CdnFrontdoorRuleConditionsRequestMethodConditionList</a>

---

##### `requestSchemeCondition`<sup>Required</sup> <a name="requestSchemeCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestSchemeCondition"></a>

```java
public CdnFrontdoorRuleConditionsRequestSchemeConditionList getRequestSchemeCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList">CdnFrontdoorRuleConditionsRequestSchemeConditionList</a>

---

##### `requestUriCondition`<sup>Required</sup> <a name="requestUriCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUriCondition"></a>

```java
public CdnFrontdoorRuleConditionsRequestUriConditionList getRequestUriCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList">CdnFrontdoorRuleConditionsRequestUriConditionList</a>

---

##### `serverPortCondition`<sup>Required</sup> <a name="serverPortCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPortCondition"></a>

```java
public CdnFrontdoorRuleConditionsServerPortConditionList getServerPortCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList">CdnFrontdoorRuleConditionsServerPortConditionList</a>

---

##### `socketAddressCondition`<sup>Required</sup> <a name="socketAddressCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddressCondition"></a>

```java
public CdnFrontdoorRuleConditionsSocketAddressConditionList getSocketAddressCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList">CdnFrontdoorRuleConditionsSocketAddressConditionList</a>

---

##### `sslProtocolCondition`<sup>Required</sup> <a name="sslProtocolCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocolCondition"></a>

```java
public CdnFrontdoorRuleConditionsSslProtocolConditionList getSslProtocolCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList">CdnFrontdoorRuleConditionsSslProtocolConditionList</a>

---

##### `urlFileExtensionCondition`<sup>Required</sup> <a name="urlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlFileExtensionCondition"></a>

```java
public CdnFrontdoorRuleConditionsUrlFileExtensionConditionList getUrlFileExtensionCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList">CdnFrontdoorRuleConditionsUrlFileExtensionConditionList</a>

---

##### `urlFilenameCondition`<sup>Required</sup> <a name="urlFilenameCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlFilenameCondition"></a>

```java
public CdnFrontdoorRuleConditionsUrlFilenameConditionList getUrlFilenameCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList">CdnFrontdoorRuleConditionsUrlFilenameConditionList</a>

---

##### `urlPathCondition`<sup>Required</sup> <a name="urlPathCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlPathCondition"></a>

```java
public CdnFrontdoorRuleConditionsUrlPathConditionList getUrlPathCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList">CdnFrontdoorRuleConditionsUrlPathConditionList</a>

---

##### `clientPortConditionInput`<sup>Optional</sup> <a name="clientPortConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPortConditionInput"></a>

```java
public java.lang.Object getClientPortConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortCondition">CdnFrontdoorRuleConditionsClientPortCondition</a>>

---

##### `cookiesConditionInput`<sup>Optional</sup> <a name="cookiesConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.cookiesConditionInput"></a>

```java
public java.lang.Object getCookiesConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsCookiesCondition">CdnFrontdoorRuleConditionsCookiesCondition</a>>

---

##### `hostNameConditionInput`<sup>Optional</sup> <a name="hostNameConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostNameConditionInput"></a>

```java
public java.lang.Object getHostNameConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameCondition">CdnFrontdoorRuleConditionsHostNameCondition</a>>

---

##### `httpVersionConditionInput`<sup>Optional</sup> <a name="httpVersionConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersionConditionInput"></a>

```java
public java.lang.Object getHttpVersionConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionCondition">CdnFrontdoorRuleConditionsHttpVersionCondition</a>>

---

##### `isDeviceConditionInput`<sup>Optional</sup> <a name="isDeviceConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.isDeviceConditionInput"></a>

```java
public java.lang.Object getIsDeviceConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsIsDeviceCondition">CdnFrontdoorRuleConditionsIsDeviceCondition</a>>

---

##### `postArgsConditionInput`<sup>Optional</sup> <a name="postArgsConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgsConditionInput"></a>

```java
public java.lang.Object getPostArgsConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition">CdnFrontdoorRuleConditionsPostArgsCondition</a>>

---

##### `queryStringConditionInput`<sup>Optional</sup> <a name="queryStringConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryStringConditionInput"></a>

```java
public java.lang.Object getQueryStringConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition">CdnFrontdoorRuleConditionsQueryStringCondition</a>>

---

##### `remoteAddressConditionInput`<sup>Optional</sup> <a name="remoteAddressConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddressConditionInput"></a>

```java
public java.lang.Object getRemoteAddressConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition">CdnFrontdoorRuleConditionsRemoteAddressCondition</a>>

---

##### `requestBodyConditionInput`<sup>Optional</sup> <a name="requestBodyConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBodyConditionInput"></a>

```java
public java.lang.Object getRequestBodyConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition">CdnFrontdoorRuleConditionsRequestBodyCondition</a>>

---

##### `requestHeaderConditionInput`<sup>Optional</sup> <a name="requestHeaderConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeaderConditionInput"></a>

```java
public java.lang.Object getRequestHeaderConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition">CdnFrontdoorRuleConditionsRequestHeaderCondition</a>>

---

##### `requestMethodConditionInput`<sup>Optional</sup> <a name="requestMethodConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethodConditionInput"></a>

```java
public java.lang.Object getRequestMethodConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition">CdnFrontdoorRuleConditionsRequestMethodCondition</a>>

---

##### `requestSchemeConditionInput`<sup>Optional</sup> <a name="requestSchemeConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestSchemeConditionInput"></a>

```java
public java.lang.Object getRequestSchemeConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition">CdnFrontdoorRuleConditionsRequestSchemeCondition</a>>

---

##### `requestUriConditionInput`<sup>Optional</sup> <a name="requestUriConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUriConditionInput"></a>

```java
public java.lang.Object getRequestUriConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition">CdnFrontdoorRuleConditionsRequestUriCondition</a>>

---

##### `serverPortConditionInput`<sup>Optional</sup> <a name="serverPortConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPortConditionInput"></a>

```java
public java.lang.Object getServerPortConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition">CdnFrontdoorRuleConditionsServerPortCondition</a>>

---

##### `socketAddressConditionInput`<sup>Optional</sup> <a name="socketAddressConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddressConditionInput"></a>

```java
public java.lang.Object getSocketAddressConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition">CdnFrontdoorRuleConditionsSocketAddressCondition</a>>

---

##### `sslProtocolConditionInput`<sup>Optional</sup> <a name="sslProtocolConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocolConditionInput"></a>

```java
public java.lang.Object getSslProtocolConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition">CdnFrontdoorRuleConditionsSslProtocolCondition</a>>

---

##### `urlFileExtensionConditionInput`<sup>Optional</sup> <a name="urlFileExtensionConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlFileExtensionConditionInput"></a>

```java
public java.lang.Object getUrlFileExtensionConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition">CdnFrontdoorRuleConditionsUrlFileExtensionCondition</a>>

---

##### `urlFilenameConditionInput`<sup>Optional</sup> <a name="urlFilenameConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlFilenameConditionInput"></a>

```java
public java.lang.Object getUrlFilenameConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition">CdnFrontdoorRuleConditionsUrlFilenameCondition</a>>

---

##### `urlPathConditionInput`<sup>Optional</sup> <a name="urlPathConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.urlPathConditionInput"></a>

```java
public java.lang.Object getUrlPathConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition">CdnFrontdoorRuleConditionsUrlPathCondition</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorRuleConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

---


### CdnFrontdoorRuleConditionsPostArgsConditionList <a name="CdnFrontdoorRuleConditionsPostArgsConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsPostArgsConditionList;

new CdnFrontdoorRuleConditionsPostArgsConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsPostArgsConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition">CdnFrontdoorRuleConditionsPostArgsCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition">CdnFrontdoorRuleConditionsPostArgsCondition</a>>

---


### CdnFrontdoorRuleConditionsPostArgsConditionOutputReference <a name="CdnFrontdoorRuleConditionsPostArgsConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference;

new CdnFrontdoorRuleConditionsPostArgsConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.postArgsNameInput">postArgsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.postArgsName">postArgsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition">CdnFrontdoorRuleConditionsPostArgsCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `postArgsNameInput`<sup>Optional</sup> <a name="postArgsNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.postArgsNameInput"></a>

```java
public java.lang.String getPostArgsNameInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `postArgsName`<sup>Required</sup> <a name="postArgsName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.postArgsName"></a>

```java
public java.lang.String getPostArgsName();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgsCondition">CdnFrontdoorRuleConditionsPostArgsCondition</a>

---


### CdnFrontdoorRuleConditionsQueryStringConditionList <a name="CdnFrontdoorRuleConditionsQueryStringConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsQueryStringConditionList;

new CdnFrontdoorRuleConditionsQueryStringConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsQueryStringConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition">CdnFrontdoorRuleConditionsQueryStringCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition">CdnFrontdoorRuleConditionsQueryStringCondition</a>>

---


### CdnFrontdoorRuleConditionsQueryStringConditionOutputReference <a name="CdnFrontdoorRuleConditionsQueryStringConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference;

new CdnFrontdoorRuleConditionsQueryStringConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition">CdnFrontdoorRuleConditionsQueryStringCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringCondition">CdnFrontdoorRuleConditionsQueryStringCondition</a>

---


### CdnFrontdoorRuleConditionsRemoteAddressConditionList <a name="CdnFrontdoorRuleConditionsRemoteAddressConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRemoteAddressConditionList;

new CdnFrontdoorRuleConditionsRemoteAddressConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition">CdnFrontdoorRuleConditionsRemoteAddressCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition">CdnFrontdoorRuleConditionsRemoteAddressCondition</a>>

---


### CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference <a name="CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference;

new CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition">CdnFrontdoorRuleConditionsRemoteAddressCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressCondition">CdnFrontdoorRuleConditionsRemoteAddressCondition</a>

---


### CdnFrontdoorRuleConditionsRequestBodyConditionList <a name="CdnFrontdoorRuleConditionsRequestBodyConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestBodyConditionList;

new CdnFrontdoorRuleConditionsRequestBodyConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition">CdnFrontdoorRuleConditionsRequestBodyCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition">CdnFrontdoorRuleConditionsRequestBodyCondition</a>>

---


### CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference <a name="CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference;

new CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition">CdnFrontdoorRuleConditionsRequestBodyCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyCondition">CdnFrontdoorRuleConditionsRequestBodyCondition</a>

---


### CdnFrontdoorRuleConditionsRequestHeaderConditionList <a name="CdnFrontdoorRuleConditionsRequestHeaderConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestHeaderConditionList;

new CdnFrontdoorRuleConditionsRequestHeaderConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition">CdnFrontdoorRuleConditionsRequestHeaderCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition">CdnFrontdoorRuleConditionsRequestHeaderCondition</a>>

---


### CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference <a name="CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference;

new CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition">CdnFrontdoorRuleConditionsRequestHeaderCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderCondition">CdnFrontdoorRuleConditionsRequestHeaderCondition</a>

---


### CdnFrontdoorRuleConditionsRequestMethodConditionList <a name="CdnFrontdoorRuleConditionsRequestMethodConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestMethodConditionList;

new CdnFrontdoorRuleConditionsRequestMethodConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition">CdnFrontdoorRuleConditionsRequestMethodCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition">CdnFrontdoorRuleConditionsRequestMethodCondition</a>>

---


### CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference <a name="CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference;

new CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition">CdnFrontdoorRuleConditionsRequestMethodCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodCondition">CdnFrontdoorRuleConditionsRequestMethodCondition</a>

---


### CdnFrontdoorRuleConditionsRequestSchemeConditionList <a name="CdnFrontdoorRuleConditionsRequestSchemeConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestSchemeConditionList;

new CdnFrontdoorRuleConditionsRequestSchemeConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition">CdnFrontdoorRuleConditionsRequestSchemeCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition">CdnFrontdoorRuleConditionsRequestSchemeCondition</a>>

---


### CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference <a name="CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference;

new CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition">CdnFrontdoorRuleConditionsRequestSchemeCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeCondition">CdnFrontdoorRuleConditionsRequestSchemeCondition</a>

---


### CdnFrontdoorRuleConditionsRequestUriConditionList <a name="CdnFrontdoorRuleConditionsRequestUriConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestUriConditionList;

new CdnFrontdoorRuleConditionsRequestUriConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsRequestUriConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition">CdnFrontdoorRuleConditionsRequestUriCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition">CdnFrontdoorRuleConditionsRequestUriCondition</a>>

---


### CdnFrontdoorRuleConditionsRequestUriConditionOutputReference <a name="CdnFrontdoorRuleConditionsRequestUriConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference;

new CdnFrontdoorRuleConditionsRequestUriConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition">CdnFrontdoorRuleConditionsRequestUriCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUriCondition">CdnFrontdoorRuleConditionsRequestUriCondition</a>

---


### CdnFrontdoorRuleConditionsServerPortConditionList <a name="CdnFrontdoorRuleConditionsServerPortConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsServerPortConditionList;

new CdnFrontdoorRuleConditionsServerPortConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsServerPortConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition">CdnFrontdoorRuleConditionsServerPortCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition">CdnFrontdoorRuleConditionsServerPortCondition</a>>

---


### CdnFrontdoorRuleConditionsServerPortConditionOutputReference <a name="CdnFrontdoorRuleConditionsServerPortConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference;

new CdnFrontdoorRuleConditionsServerPortConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition">CdnFrontdoorRuleConditionsServerPortCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortCondition">CdnFrontdoorRuleConditionsServerPortCondition</a>

---


### CdnFrontdoorRuleConditionsSocketAddressConditionList <a name="CdnFrontdoorRuleConditionsSocketAddressConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsSocketAddressConditionList;

new CdnFrontdoorRuleConditionsSocketAddressConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition">CdnFrontdoorRuleConditionsSocketAddressCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition">CdnFrontdoorRuleConditionsSocketAddressCondition</a>>

---


### CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference <a name="CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference;

new CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition">CdnFrontdoorRuleConditionsSocketAddressCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressCondition">CdnFrontdoorRuleConditionsSocketAddressCondition</a>

---


### CdnFrontdoorRuleConditionsSslProtocolConditionList <a name="CdnFrontdoorRuleConditionsSslProtocolConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsSslProtocolConditionList;

new CdnFrontdoorRuleConditionsSslProtocolConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition">CdnFrontdoorRuleConditionsSslProtocolCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition">CdnFrontdoorRuleConditionsSslProtocolCondition</a>>

---


### CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference <a name="CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference;

new CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition">CdnFrontdoorRuleConditionsSslProtocolCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolCondition">CdnFrontdoorRuleConditionsSslProtocolCondition</a>

---


### CdnFrontdoorRuleConditionsUrlFileExtensionConditionList <a name="CdnFrontdoorRuleConditionsUrlFileExtensionConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList;

new CdnFrontdoorRuleConditionsUrlFileExtensionConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition">CdnFrontdoorRuleConditionsUrlFileExtensionCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition">CdnFrontdoorRuleConditionsUrlFileExtensionCondition</a>>

---


### CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference <a name="CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference;

new CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition">CdnFrontdoorRuleConditionsUrlFileExtensionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFileExtensionCondition">CdnFrontdoorRuleConditionsUrlFileExtensionCondition</a>

---


### CdnFrontdoorRuleConditionsUrlFilenameConditionList <a name="CdnFrontdoorRuleConditionsUrlFilenameConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsUrlFilenameConditionList;

new CdnFrontdoorRuleConditionsUrlFilenameConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition">CdnFrontdoorRuleConditionsUrlFilenameCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition">CdnFrontdoorRuleConditionsUrlFilenameCondition</a>>

---


### CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference <a name="CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference;

new CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition">CdnFrontdoorRuleConditionsUrlFilenameCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlFilenameCondition">CdnFrontdoorRuleConditionsUrlFilenameCondition</a>

---


### CdnFrontdoorRuleConditionsUrlPathConditionList <a name="CdnFrontdoorRuleConditionsUrlPathConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsUrlPathConditionList;

new CdnFrontdoorRuleConditionsUrlPathConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.get"></a>

```java
public CdnFrontdoorRuleConditionsUrlPathConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition">CdnFrontdoorRuleConditionsUrlPathCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition">CdnFrontdoorRuleConditionsUrlPathCondition</a>>

---


### CdnFrontdoorRuleConditionsUrlPathConditionOutputReference <a name="CdnFrontdoorRuleConditionsUrlPathConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference;

new CdnFrontdoorRuleConditionsUrlPathConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition">CdnFrontdoorRuleConditionsUrlPathCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsUrlPathCondition">CdnFrontdoorRuleConditionsUrlPathCondition</a>

---


### CdnFrontdoorRuleTimeoutsOutputReference <a name="CdnFrontdoorRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_rule.CdnFrontdoorRuleTimeoutsOutputReference;

new CdnFrontdoorRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

---




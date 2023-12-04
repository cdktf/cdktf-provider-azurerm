# `securityCenterAutomation` Submodule <a name="`securityCenterAutomation` Submodule" id="@cdktf/provider-azurerm.securityCenterAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterAutomation <a name="SecurityCenterAutomation" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation azurerm_security_center_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomation;

SecurityCenterAutomation.Builder.create(Construct scope, java.lang.String id)
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
    .action(IResolvable)
    .action(java.util.List<SecurityCenterAutomationAction>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
    .source(IResolvable)
    .source(java.util.List<SecurityCenterAutomationSource>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SecurityCenterAutomationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#location SecurityCenterAutomation#location}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#name SecurityCenterAutomation#name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#resource_group_name SecurityCenterAutomation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#scopes SecurityCenterAutomation#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.source">source</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a>></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#description SecurityCenterAutomation#description}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#enabled SecurityCenterAutomation#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#id SecurityCenterAutomation#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#tags SecurityCenterAutomation#tags}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.action"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#action SecurityCenterAutomation#action}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#location SecurityCenterAutomation#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#name SecurityCenterAutomation#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#resource_group_name SecurityCenterAutomation#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#scopes SecurityCenterAutomation#scopes}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.source"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#source SecurityCenterAutomation#source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#description SecurityCenterAutomation#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#enabled SecurityCenterAutomation#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#id SecurityCenterAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#tags SecurityCenterAutomation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#timeouts SecurityCenterAutomation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putAction"></a>

```java
public void putAction(IResolvable OR java.util.List<SecurityCenterAutomationAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a>>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putSource"></a>

```java
public void putSource(IResolvable OR java.util.List<SecurityCenterAutomationSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putTimeouts"></a>

```java
public void putTimeouts(SecurityCenterAutomationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityCenterAutomation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomation;

SecurityCenterAutomation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomation;

SecurityCenterAutomation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomation;

SecurityCenterAutomation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomation;

SecurityCenterAutomation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityCenterAutomation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecurityCenterAutomation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityCenterAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityCenterAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecurityCenterAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList">SecurityCenterAutomationActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList">SecurityCenterAutomationSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference">SecurityCenterAutomationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.actionInput">actionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.sourceInput">sourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.action"></a>

```java
public SecurityCenterAutomationActionList getAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList">SecurityCenterAutomationActionList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.source"></a>

```java
public SecurityCenterAutomationSourceList getSource();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList">SecurityCenterAutomationSourceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeouts"></a>

```java
public SecurityCenterAutomationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference">SecurityCenterAutomationTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.actionInput"></a>

```java
public java.lang.Object getActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.sourceInput"></a>

```java
public java.lang.Object getSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterAutomationAction <a name="SecurityCenterAutomationAction" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationAction;

SecurityCenterAutomationAction.builder()
    .resourceId(java.lang.String)
    .type(java.lang.String)
//  .connectionString(java.lang.String)
//  .triggerUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#resource_id SecurityCenterAutomation#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#type SecurityCenterAutomation#type}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#connection_string SecurityCenterAutomation#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.triggerUrl">triggerUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#trigger_url SecurityCenterAutomation#trigger_url}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#resource_id SecurityCenterAutomation#resource_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#type SecurityCenterAutomation#type}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#connection_string SecurityCenterAutomation#connection_string}.

---

##### `triggerUrl`<sup>Optional</sup> <a name="triggerUrl" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.triggerUrl"></a>

```java
public java.lang.String getTriggerUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#trigger_url SecurityCenterAutomation#trigger_url}.

---

### SecurityCenterAutomationConfig <a name="SecurityCenterAutomationConfig" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationConfig;

SecurityCenterAutomationConfig.builder()
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
    .action(IResolvable)
    .action(java.util.List<SecurityCenterAutomationAction>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
    .source(IResolvable)
    .source(java.util.List<SecurityCenterAutomationSource>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SecurityCenterAutomationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#location SecurityCenterAutomation#location}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#name SecurityCenterAutomation#name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#resource_group_name SecurityCenterAutomation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#scopes SecurityCenterAutomation#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.source">source</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a>></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#description SecurityCenterAutomation#description}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#enabled SecurityCenterAutomation#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#id SecurityCenterAutomation#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#tags SecurityCenterAutomation#tags}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.action"></a>

```java
public java.lang.Object getAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#action SecurityCenterAutomation#action}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#location SecurityCenterAutomation#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#name SecurityCenterAutomation#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#resource_group_name SecurityCenterAutomation#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#scopes SecurityCenterAutomation#scopes}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.source"></a>

```java
public java.lang.Object getSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#source SecurityCenterAutomation#source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#description SecurityCenterAutomation#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#enabled SecurityCenterAutomation#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#id SecurityCenterAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#tags SecurityCenterAutomation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.timeouts"></a>

```java
public SecurityCenterAutomationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#timeouts SecurityCenterAutomation#timeouts}

---

### SecurityCenterAutomationSource <a name="SecurityCenterAutomationSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationSource;

SecurityCenterAutomationSource.builder()
    .eventSource(java.lang.String)
//  .ruleSet(IResolvable)
//  .ruleSet(java.util.List<SecurityCenterAutomationSourceRuleSet>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.eventSource">eventSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#event_source SecurityCenterAutomation#event_source}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.ruleSet">ruleSet</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet">SecurityCenterAutomationSourceRuleSet</a>></code> | rule_set block. |

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.eventSource"></a>

```java
public java.lang.String getEventSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#event_source SecurityCenterAutomation#event_source}.

---

##### `ruleSet`<sup>Optional</sup> <a name="ruleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.ruleSet"></a>

```java
public java.lang.Object getRuleSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet">SecurityCenterAutomationSourceRuleSet</a>>

rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#rule_set SecurityCenterAutomation#rule_set}

---

### SecurityCenterAutomationSourceRuleSet <a name="SecurityCenterAutomationSourceRuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationSourceRuleSet;

SecurityCenterAutomationSourceRuleSet.builder()
    .rule(IResolvable)
    .rule(java.util.List<SecurityCenterAutomationSourceRuleSetRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule">SecurityCenterAutomationSourceRuleSetRule</a>></code> | rule block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule">SecurityCenterAutomationSourceRuleSetRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#rule SecurityCenterAutomation#rule}

---

### SecurityCenterAutomationSourceRuleSetRule <a name="SecurityCenterAutomationSourceRuleSetRule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationSourceRuleSetRule;

SecurityCenterAutomationSourceRuleSetRule.builder()
    .expectedValue(java.lang.String)
    .operator(java.lang.String)
    .propertyPath(java.lang.String)
    .propertyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.expectedValue">expectedValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#expected_value SecurityCenterAutomation#expected_value}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#operator SecurityCenterAutomation#operator}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyPath">propertyPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#property_path SecurityCenterAutomation#property_path}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyType">propertyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#property_type SecurityCenterAutomation#property_type}. |

---

##### `expectedValue`<sup>Required</sup> <a name="expectedValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.expectedValue"></a>

```java
public java.lang.String getExpectedValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#expected_value SecurityCenterAutomation#expected_value}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#operator SecurityCenterAutomation#operator}.

---

##### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyPath"></a>

```java
public java.lang.String getPropertyPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#property_path SecurityCenterAutomation#property_path}.

---

##### `propertyType`<sup>Required</sup> <a name="propertyType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyType"></a>

```java
public java.lang.String getPropertyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#property_type SecurityCenterAutomation#property_type}.

---

### SecurityCenterAutomationTimeouts <a name="SecurityCenterAutomationTimeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationTimeouts;

SecurityCenterAutomationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#create SecurityCenterAutomation#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#delete SecurityCenterAutomation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#read SecurityCenterAutomation#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#update SecurityCenterAutomation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#create SecurityCenterAutomation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#delete SecurityCenterAutomation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#read SecurityCenterAutomation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_automation#update SecurityCenterAutomation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterAutomationActionList <a name="SecurityCenterAutomationActionList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationActionList;

new SecurityCenterAutomationActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.get"></a>

```java
public SecurityCenterAutomationActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a>>

---


### SecurityCenterAutomationActionOutputReference <a name="SecurityCenterAutomationActionOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationActionOutputReference;

new SecurityCenterAutomationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetTriggerUrl">resetTriggerUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetTriggerUrl` <a name="resetTriggerUrl" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetTriggerUrl"></a>

```java
public void resetTriggerUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrlInput">triggerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrl">triggerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `triggerUrlInput`<sup>Optional</sup> <a name="triggerUrlInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrlInput"></a>

```java
public java.lang.String getTriggerUrlInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `triggerUrl`<sup>Required</sup> <a name="triggerUrl" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrl"></a>

```java
public java.lang.String getTriggerUrl();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction">SecurityCenterAutomationAction</a>

---


### SecurityCenterAutomationSourceList <a name="SecurityCenterAutomationSourceList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationSourceList;

new SecurityCenterAutomationSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.get"></a>

```java
public SecurityCenterAutomationSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a>>

---


### SecurityCenterAutomationSourceOutputReference <a name="SecurityCenterAutomationSourceOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationSourceOutputReference;

new SecurityCenterAutomationSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.putRuleSet">putRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resetRuleSet">resetRuleSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRuleSet` <a name="putRuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.putRuleSet"></a>

```java
public void putRuleSet(IResolvable OR java.util.List<SecurityCenterAutomationSourceRuleSet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.putRuleSet.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet">SecurityCenterAutomationSourceRuleSet</a>>

---

##### `resetRuleSet` <a name="resetRuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resetRuleSet"></a>

```java
public void resetRuleSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSet">ruleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList">SecurityCenterAutomationSourceRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSourceInput">eventSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSetInput">ruleSetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet">SecurityCenterAutomationSourceRuleSet</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSource">eventSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ruleSet`<sup>Required</sup> <a name="ruleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSet"></a>

```java
public SecurityCenterAutomationSourceRuleSetList getRuleSet();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList">SecurityCenterAutomationSourceRuleSetList</a>

---

##### `eventSourceInput`<sup>Optional</sup> <a name="eventSourceInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSourceInput"></a>

```java
public java.lang.String getEventSourceInput();
```

- *Type:* java.lang.String

---

##### `ruleSetInput`<sup>Optional</sup> <a name="ruleSetInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSetInput"></a>

```java
public java.lang.Object getRuleSetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet">SecurityCenterAutomationSourceRuleSet</a>>

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSource"></a>

```java
public java.lang.String getEventSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource">SecurityCenterAutomationSource</a>

---


### SecurityCenterAutomationSourceRuleSetList <a name="SecurityCenterAutomationSourceRuleSetList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationSourceRuleSetList;

new SecurityCenterAutomationSourceRuleSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.get"></a>

```java
public SecurityCenterAutomationSourceRuleSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet">SecurityCenterAutomationSourceRuleSet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet">SecurityCenterAutomationSourceRuleSet</a>>

---


### SecurityCenterAutomationSourceRuleSetOutputReference <a name="SecurityCenterAutomationSourceRuleSetOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationSourceRuleSetOutputReference;

new SecurityCenterAutomationSourceRuleSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<SecurityCenterAutomationSourceRuleSetRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule">SecurityCenterAutomationSourceRuleSetRule</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList">SecurityCenterAutomationSourceRuleSetRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule">SecurityCenterAutomationSourceRuleSetRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet">SecurityCenterAutomationSourceRuleSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.rule"></a>

```java
public SecurityCenterAutomationSourceRuleSetRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList">SecurityCenterAutomationSourceRuleSetRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule">SecurityCenterAutomationSourceRuleSetRule</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet">SecurityCenterAutomationSourceRuleSet</a>

---


### SecurityCenterAutomationSourceRuleSetRuleList <a name="SecurityCenterAutomationSourceRuleSetRuleList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationSourceRuleSetRuleList;

new SecurityCenterAutomationSourceRuleSetRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.get"></a>

```java
public SecurityCenterAutomationSourceRuleSetRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule">SecurityCenterAutomationSourceRuleSetRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule">SecurityCenterAutomationSourceRuleSetRule</a>>

---


### SecurityCenterAutomationSourceRuleSetRuleOutputReference <a name="SecurityCenterAutomationSourceRuleSetRuleOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationSourceRuleSetRuleOutputReference;

new SecurityCenterAutomationSourceRuleSetRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValueInput">expectedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPathInput">propertyPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyTypeInput">propertyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValue">expectedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPath">propertyPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyType">propertyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule">SecurityCenterAutomationSourceRuleSetRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expectedValueInput`<sup>Optional</sup> <a name="expectedValueInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValueInput"></a>

```java
public java.lang.String getExpectedValueInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `propertyPathInput`<sup>Optional</sup> <a name="propertyPathInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPathInput"></a>

```java
public java.lang.String getPropertyPathInput();
```

- *Type:* java.lang.String

---

##### `propertyTypeInput`<sup>Optional</sup> <a name="propertyTypeInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyTypeInput"></a>

```java
public java.lang.String getPropertyTypeInput();
```

- *Type:* java.lang.String

---

##### `expectedValue`<sup>Required</sup> <a name="expectedValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValue"></a>

```java
public java.lang.String getExpectedValue();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPath"></a>

```java
public java.lang.String getPropertyPath();
```

- *Type:* java.lang.String

---

##### `propertyType`<sup>Required</sup> <a name="propertyType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyType"></a>

```java
public java.lang.String getPropertyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule">SecurityCenterAutomationSourceRuleSetRule</a>

---


### SecurityCenterAutomationTimeoutsOutputReference <a name="SecurityCenterAutomationTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_automation.SecurityCenterAutomationTimeoutsOutputReference;

new SecurityCenterAutomationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a>

---




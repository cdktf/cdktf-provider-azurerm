# `automationPowershell72Module` Submodule <a name="`automationPowershell72Module` Submodule" id="@cdktf/provider-azurerm.automationPowershell72Module"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationPowershell72Module <a name="AutomationPowershell72Module" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module azurerm_automation_powershell72_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72Module;

AutomationPowershell72Module.Builder.create(Construct scope, java.lang.String id)
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
    .automationAccountId(java.lang.String)
    .moduleLink(AutomationPowershell72ModuleModuleLink)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AutomationPowershell72ModuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.automationAccountId">automationAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#automation_account_id AutomationPowershell72Module#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.moduleLink">moduleLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | module_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#name AutomationPowershell72Module#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#id AutomationPowershell72Module#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#tags AutomationPowershell72Module#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.automationAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#automation_account_id AutomationPowershell72Module#automation_account_id}.

---

##### `moduleLink`<sup>Required</sup> <a name="moduleLink" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.moduleLink"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

module_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#module_link AutomationPowershell72Module#module_link}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#name AutomationPowershell72Module#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#id AutomationPowershell72Module#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#tags AutomationPowershell72Module#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#timeouts AutomationPowershell72Module#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putModuleLink">putModuleLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putModuleLink` <a name="putModuleLink" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putModuleLink"></a>

```java
public void putModuleLink(AutomationPowershell72ModuleModuleLink value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putModuleLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts"></a>

```java
public void putTimeouts(AutomationPowershell72ModuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationPowershell72Module resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72Module;

AutomationPowershell72Module.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72Module;

AutomationPowershell72Module.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72Module;

AutomationPowershell72Module.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72Module;

AutomationPowershell72Module.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutomationPowershell72Module.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AutomationPowershell72Module resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutomationPowershell72Module to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutomationPowershell72Module that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AutomationPowershell72Module to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLink">moduleLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference">AutomationPowershell72ModuleModuleLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference">AutomationPowershell72ModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountIdInput">automationAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLinkInput">moduleLinkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountId">automationAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `moduleLink`<sup>Required</sup> <a name="moduleLink" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLink"></a>

```java
public AutomationPowershell72ModuleModuleLinkOutputReference getModuleLink();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference">AutomationPowershell72ModuleModuleLinkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeouts"></a>

```java
public AutomationPowershell72ModuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference">AutomationPowershell72ModuleTimeoutsOutputReference</a>

---

##### `automationAccountIdInput`<sup>Optional</sup> <a name="automationAccountIdInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountIdInput"></a>

```java
public java.lang.String getAutomationAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `moduleLinkInput`<sup>Optional</sup> <a name="moduleLinkInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLinkInput"></a>

```java
public AutomationPowershell72ModuleModuleLink getModuleLinkInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountId"></a>

```java
public java.lang.String getAutomationAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationPowershell72ModuleConfig <a name="AutomationPowershell72ModuleConfig" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72ModuleConfig;

AutomationPowershell72ModuleConfig.builder()
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
    .automationAccountId(java.lang.String)
    .moduleLink(AutomationPowershell72ModuleModuleLink)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AutomationPowershell72ModuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.automationAccountId">automationAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#automation_account_id AutomationPowershell72Module#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.moduleLink">moduleLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | module_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#name AutomationPowershell72Module#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#id AutomationPowershell72Module#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#tags AutomationPowershell72Module#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.automationAccountId"></a>

```java
public java.lang.String getAutomationAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#automation_account_id AutomationPowershell72Module#automation_account_id}.

---

##### `moduleLink`<sup>Required</sup> <a name="moduleLink" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.moduleLink"></a>

```java
public AutomationPowershell72ModuleModuleLink getModuleLink();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

module_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#module_link AutomationPowershell72Module#module_link}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#name AutomationPowershell72Module#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#id AutomationPowershell72Module#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#tags AutomationPowershell72Module#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.timeouts"></a>

```java
public AutomationPowershell72ModuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#timeouts AutomationPowershell72Module#timeouts}

---

### AutomationPowershell72ModuleModuleLink <a name="AutomationPowershell72ModuleModuleLink" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72ModuleModuleLink;

AutomationPowershell72ModuleModuleLink.builder()
    .uri(java.lang.String)
//  .hash(AutomationPowershell72ModuleModuleLinkHash)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#uri AutomationPowershell72Module#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a></code> | hash block. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#uri AutomationPowershell72Module#uri}.

---

##### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.hash"></a>

```java
public AutomationPowershell72ModuleModuleLinkHash getHash();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#hash AutomationPowershell72Module#hash}

---

### AutomationPowershell72ModuleModuleLinkHash <a name="AutomationPowershell72ModuleModuleLinkHash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72ModuleModuleLinkHash;

AutomationPowershell72ModuleModuleLinkHash.builder()
    .algorithm(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#algorithm AutomationPowershell72Module#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#value AutomationPowershell72Module#value}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#algorithm AutomationPowershell72Module#algorithm}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#value AutomationPowershell72Module#value}.

---

### AutomationPowershell72ModuleTimeouts <a name="AutomationPowershell72ModuleTimeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72ModuleTimeouts;

AutomationPowershell72ModuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#create AutomationPowershell72Module#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#delete AutomationPowershell72Module#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#read AutomationPowershell72Module#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#update AutomationPowershell72Module#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#create AutomationPowershell72Module#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#delete AutomationPowershell72Module#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#read AutomationPowershell72Module#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/automation_powershell72_module#update AutomationPowershell72Module#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationPowershell72ModuleModuleLinkHashOutputReference <a name="AutomationPowershell72ModuleModuleLinkHashOutputReference" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72ModuleModuleLinkHashOutputReference;

new AutomationPowershell72ModuleModuleLinkHashOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.internalValue"></a>

```java
public AutomationPowershell72ModuleModuleLinkHash getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

---


### AutomationPowershell72ModuleModuleLinkOutputReference <a name="AutomationPowershell72ModuleModuleLinkOutputReference" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72ModuleModuleLinkOutputReference;

new AutomationPowershell72ModuleModuleLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.putHash">putHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resetHash">resetHash</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHash` <a name="putHash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.putHash"></a>

```java
public void putHash(AutomationPowershell72ModuleModuleLinkHash value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

---

##### `resetHash` <a name="resetHash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resetHash"></a>

```java
public void resetHash()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference">AutomationPowershell72ModuleModuleLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hashInput">hashInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hash"></a>

```java
public AutomationPowershell72ModuleModuleLinkHashOutputReference getHash();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference">AutomationPowershell72ModuleModuleLinkHashOutputReference</a>

---

##### `hashInput`<sup>Optional</sup> <a name="hashInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hashInput"></a>

```java
public AutomationPowershell72ModuleModuleLinkHash getHashInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.internalValue"></a>

```java
public AutomationPowershell72ModuleModuleLink getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

---


### AutomationPowershell72ModuleTimeoutsOutputReference <a name="AutomationPowershell72ModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_powershell72_module.AutomationPowershell72ModuleTimeoutsOutputReference;

new AutomationPowershell72ModuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>

---




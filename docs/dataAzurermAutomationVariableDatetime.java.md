# `dataAzurermAutomationVariableDatetime` Submodule <a name="`dataAzurermAutomationVariableDatetime` Submodule" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAutomationVariableDatetime <a name="DataAzurermAutomationVariableDatetime" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime azurerm_automation_variable_datetime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_automation_variable_datetime.DataAzurermAutomationVariableDatetime;

DataAzurermAutomationVariableDatetime.Builder.create(Construct scope, java.lang.String id)
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
    .automationAccountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermAutomationVariableDatetimeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.automationAccountName">automationAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#automation_account_name DataAzurermAutomationVariableDatetime#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#name DataAzurermAutomationVariableDatetime#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#resource_group_name DataAzurermAutomationVariableDatetime#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#id DataAzurermAutomationVariableDatetime#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts">DataAzurermAutomationVariableDatetimeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.automationAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#automation_account_name DataAzurermAutomationVariableDatetime#automation_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#name DataAzurermAutomationVariableDatetime#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#resource_group_name DataAzurermAutomationVariableDatetime#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#id DataAzurermAutomationVariableDatetime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts">DataAzurermAutomationVariableDatetimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#timeouts DataAzurermAutomationVariableDatetime#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermAutomationVariableDatetimeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts">DataAzurermAutomationVariableDatetimeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermAutomationVariableDatetime resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_automation_variable_datetime.DataAzurermAutomationVariableDatetime;

DataAzurermAutomationVariableDatetime.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_automation_variable_datetime.DataAzurermAutomationVariableDatetime;

DataAzurermAutomationVariableDatetime.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_automation_variable_datetime.DataAzurermAutomationVariableDatetime;

DataAzurermAutomationVariableDatetime.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_automation_variable_datetime.DataAzurermAutomationVariableDatetime;

DataAzurermAutomationVariableDatetime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermAutomationVariableDatetime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermAutomationVariableDatetime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermAutomationVariableDatetime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermAutomationVariableDatetime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAutomationVariableDatetime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.encrypted">encrypted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference">DataAzurermAutomationVariableDatetimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.automationAccountNameInput">automationAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts">DataAzurermAutomationVariableDatetimeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.automationAccountName">automationAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.encrypted"></a>

```java
public IResolvable getEncrypted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.timeouts"></a>

```java
public DataAzurermAutomationVariableDatetimeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference">DataAzurermAutomationVariableDatetimeTimeoutsOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `automationAccountNameInput`<sup>Optional</sup> <a name="automationAccountNameInput" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.automationAccountNameInput"></a>

```java
public java.lang.String getAutomationAccountNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts">DataAzurermAutomationVariableDatetimeTimeouts</a>

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.automationAccountName"></a>

```java
public java.lang.String getAutomationAccountName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetime.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAutomationVariableDatetimeConfig <a name="DataAzurermAutomationVariableDatetimeConfig" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_automation_variable_datetime.DataAzurermAutomationVariableDatetimeConfig;

DataAzurermAutomationVariableDatetimeConfig.builder()
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
    .automationAccountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermAutomationVariableDatetimeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.automationAccountName">automationAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#automation_account_name DataAzurermAutomationVariableDatetime#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#name DataAzurermAutomationVariableDatetime#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#resource_group_name DataAzurermAutomationVariableDatetime#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#id DataAzurermAutomationVariableDatetime#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts">DataAzurermAutomationVariableDatetimeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.automationAccountName"></a>

```java
public java.lang.String getAutomationAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#automation_account_name DataAzurermAutomationVariableDatetime#automation_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#name DataAzurermAutomationVariableDatetime#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#resource_group_name DataAzurermAutomationVariableDatetime#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#id DataAzurermAutomationVariableDatetime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeConfig.property.timeouts"></a>

```java
public DataAzurermAutomationVariableDatetimeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts">DataAzurermAutomationVariableDatetimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#timeouts DataAzurermAutomationVariableDatetime#timeouts}

---

### DataAzurermAutomationVariableDatetimeTimeouts <a name="DataAzurermAutomationVariableDatetimeTimeouts" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_automation_variable_datetime.DataAzurermAutomationVariableDatetimeTimeouts;

DataAzurermAutomationVariableDatetimeTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#read DataAzurermAutomationVariableDatetime#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/automation_variable_datetime#read DataAzurermAutomationVariableDatetime#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAutomationVariableDatetimeTimeoutsOutputReference <a name="DataAzurermAutomationVariableDatetimeTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_automation_variable_datetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference;

new DataAzurermAutomationVariableDatetimeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts">DataAzurermAutomationVariableDatetimeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAutomationVariableDatetime.DataAzurermAutomationVariableDatetimeTimeouts">DataAzurermAutomationVariableDatetimeTimeouts</a>

---




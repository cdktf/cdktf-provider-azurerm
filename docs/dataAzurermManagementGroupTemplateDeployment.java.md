# `data_azurerm_management_group_template_deployment`

Refer to the Terraform Registory for docs: [`data_azurerm_management_group_template_deployment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment).

# `dataAzurermManagementGroupTemplateDeployment` Submodule <a name="`dataAzurermManagementGroupTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermManagementGroupTemplateDeployment <a name="DataAzurermManagementGroupTemplateDeployment" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment azurerm_management_group_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_management_group_template_deployment.DataAzurermManagementGroupTemplateDeployment;

DataAzurermManagementGroupTemplateDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .managementGroupId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermManagementGroupTemplateDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#management_group_id DataAzurermManagementGroupTemplateDeployment#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#name DataAzurermManagementGroupTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#id DataAzurermManagementGroupTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.managementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#management_group_id DataAzurermManagementGroupTemplateDeployment#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#name DataAzurermManagementGroupTemplateDeployment#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#id DataAzurermManagementGroupTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#timeouts DataAzurermManagementGroupTemplateDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermManagementGroupTemplateDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_management_group_template_deployment.DataAzurermManagementGroupTemplateDeployment;

DataAzurermManagementGroupTemplateDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_management_group_template_deployment.DataAzurermManagementGroupTemplateDeployment;

DataAzurermManagementGroupTemplateDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_management_group_template_deployment.DataAzurermManagementGroupTemplateDeployment;

DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.outputContent">outputContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference">DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `outputContent`<sup>Required</sup> <a name="outputContent" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.outputContent"></a>

```java
public java.lang.String getOutputContent();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeouts"></a>

```java
public DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference">DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupIdInput"></a>

```java
public java.lang.String getManagementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermManagementGroupTemplateDeploymentConfig <a name="DataAzurermManagementGroupTemplateDeploymentConfig" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_management_group_template_deployment.DataAzurermManagementGroupTemplateDeploymentConfig;

DataAzurermManagementGroupTemplateDeploymentConfig.builder()
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
    .managementGroupId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermManagementGroupTemplateDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#management_group_id DataAzurermManagementGroupTemplateDeployment#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#name DataAzurermManagementGroupTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#id DataAzurermManagementGroupTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#management_group_id DataAzurermManagementGroupTemplateDeployment#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#name DataAzurermManagementGroupTemplateDeployment#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#id DataAzurermManagementGroupTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.timeouts"></a>

```java
public DataAzurermManagementGroupTemplateDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#timeouts DataAzurermManagementGroupTemplateDeployment#timeouts}

---

### DataAzurermManagementGroupTemplateDeploymentTimeouts <a name="DataAzurermManagementGroupTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_management_group_template_deployment.DataAzurermManagementGroupTemplateDeploymentTimeouts;

DataAzurermManagementGroupTemplateDeploymentTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#read DataAzurermManagementGroupTemplateDeployment#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/management_group_template_deployment#read DataAzurermManagementGroupTemplateDeployment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference <a name="DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_management_group_template_deployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference;

new DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

---




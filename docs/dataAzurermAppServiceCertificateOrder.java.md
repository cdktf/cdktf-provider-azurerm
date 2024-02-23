# `dataAzurermAppServiceCertificateOrder` Submodule <a name="`dataAzurermAppServiceCertificateOrder` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppServiceCertificateOrder <a name="DataAzurermAppServiceCertificateOrder" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order azurerm_app_service_certificate_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrder;

DataAzurermAppServiceCertificateOrder.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermAppServiceCertificateOrderTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#name DataAzurermAppServiceCertificateOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#id DataAzurermAppServiceCertificateOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#name DataAzurermAppServiceCertificateOrder#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#id DataAzurermAppServiceCertificateOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#timeouts DataAzurermAppServiceCertificateOrder#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermAppServiceCertificateOrderTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermAppServiceCertificateOrder resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrder;

DataAzurermAppServiceCertificateOrder.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrder;

DataAzurermAppServiceCertificateOrder.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrder;

DataAzurermAppServiceCertificateOrder.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrder;

DataAzurermAppServiceCertificateOrder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermAppServiceCertificateOrder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermAppServiceCertificateOrder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermAppServiceCertificateOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermAppServiceCertificateOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAppServiceCertificateOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons">appServiceCertificateNotRenewableReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.autoRenew">autoRenew</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList">DataAzurermAppServiceCertificateOrderCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.csr">csr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.distinguishedName">distinguishedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.domainVerificationToken">domainVerificationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.intermediateThumbprint">intermediateThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.isPrivateKeyExternal">isPrivateKeyExternal</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.keySize">keySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.productType">productType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.rootThumbprint">rootThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.signedCertificateThumbprint">signedCertificateThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference">DataAzurermAppServiceCertificateOrderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.validityInYears">validityInYears</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `appServiceCertificateNotRenewableReasons`<sup>Required</sup> <a name="appServiceCertificateNotRenewableReasons" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons"></a>

```java
public java.util.List<java.lang.String> getAppServiceCertificateNotRenewableReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.autoRenew"></a>

```java
public IResolvable getAutoRenew();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.certificates"></a>

```java
public DataAzurermAppServiceCertificateOrderCertificatesList getCertificates();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList">DataAzurermAppServiceCertificateOrderCertificatesList</a>

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.csr"></a>

```java
public java.lang.String getCsr();
```

- *Type:* java.lang.String

---

##### `distinguishedName`<sup>Required</sup> <a name="distinguishedName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.distinguishedName"></a>

```java
public java.lang.String getDistinguishedName();
```

- *Type:* java.lang.String

---

##### `domainVerificationToken`<sup>Required</sup> <a name="domainVerificationToken" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.domainVerificationToken"></a>

```java
public java.lang.String getDomainVerificationToken();
```

- *Type:* java.lang.String

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `intermediateThumbprint`<sup>Required</sup> <a name="intermediateThumbprint" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.intermediateThumbprint"></a>

```java
public java.lang.String getIntermediateThumbprint();
```

- *Type:* java.lang.String

---

##### `isPrivateKeyExternal`<sup>Required</sup> <a name="isPrivateKeyExternal" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.isPrivateKeyExternal"></a>

```java
public IResolvable getIsPrivateKeyExternal();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.keySize"></a>

```java
public java.lang.Number getKeySize();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `productType`<sup>Required</sup> <a name="productType" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.productType"></a>

```java
public java.lang.String getProductType();
```

- *Type:* java.lang.String

---

##### `rootThumbprint`<sup>Required</sup> <a name="rootThumbprint" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.rootThumbprint"></a>

```java
public java.lang.String getRootThumbprint();
```

- *Type:* java.lang.String

---

##### `signedCertificateThumbprint`<sup>Required</sup> <a name="signedCertificateThumbprint" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.signedCertificateThumbprint"></a>

```java
public java.lang.String getSignedCertificateThumbprint();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeouts"></a>

```java
public DataAzurermAppServiceCertificateOrderTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference">DataAzurermAppServiceCertificateOrderTimeoutsOutputReference</a>

---

##### `validityInYears`<sup>Required</sup> <a name="validityInYears" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.validityInYears"></a>

```java
public java.lang.Number getValidityInYears();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppServiceCertificateOrderCertificates <a name="DataAzurermAppServiceCertificateOrderCertificates" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrderCertificates;

DataAzurermAppServiceCertificateOrderCertificates.builder()
    .build();
```


### DataAzurermAppServiceCertificateOrderConfig <a name="DataAzurermAppServiceCertificateOrderConfig" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrderConfig;

DataAzurermAppServiceCertificateOrderConfig.builder()
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermAppServiceCertificateOrderTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#name DataAzurermAppServiceCertificateOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#id DataAzurermAppServiceCertificateOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#name DataAzurermAppServiceCertificateOrder#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#id DataAzurermAppServiceCertificateOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.timeouts"></a>

```java
public DataAzurermAppServiceCertificateOrderTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#timeouts DataAzurermAppServiceCertificateOrder#timeouts}

---

### DataAzurermAppServiceCertificateOrderTimeouts <a name="DataAzurermAppServiceCertificateOrderTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrderTimeouts;

DataAzurermAppServiceCertificateOrderTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#read DataAzurermAppServiceCertificateOrder#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/app_service_certificate_order#read DataAzurermAppServiceCertificateOrder#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppServiceCertificateOrderCertificatesList <a name="DataAzurermAppServiceCertificateOrderCertificatesList" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrderCertificatesList;

new DataAzurermAppServiceCertificateOrderCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.get"></a>

```java
public DataAzurermAppServiceCertificateOrderCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermAppServiceCertificateOrderCertificatesOutputReference <a name="DataAzurermAppServiceCertificateOrderCertificatesOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrderCertificatesOutputReference;

new DataAzurermAppServiceCertificateOrderCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName">keyVaultSecretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.provisioningState">provisioningState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates">DataAzurermAppServiceCertificateOrderCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `keyVaultSecretName`<sup>Required</sup> <a name="keyVaultSecretName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName"></a>

```java
public java.lang.String getKeyVaultSecretName();
```

- *Type:* java.lang.String

---

##### `provisioningState`<sup>Required</sup> <a name="provisioningState" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.provisioningState"></a>

```java
public java.lang.String getProvisioningState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.internalValue"></a>

```java
public DataAzurermAppServiceCertificateOrderCertificates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates">DataAzurermAppServiceCertificateOrderCertificates</a>

---


### DataAzurermAppServiceCertificateOrderTimeoutsOutputReference <a name="DataAzurermAppServiceCertificateOrderTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_certificate_order.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference;

new DataAzurermAppServiceCertificateOrderTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>

---




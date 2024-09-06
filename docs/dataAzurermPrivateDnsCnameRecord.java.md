# `dataAzurermPrivateDnsCnameRecord` Submodule <a name="`dataAzurermPrivateDnsCnameRecord` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsCnameRecord <a name="DataAzurermPrivateDnsCnameRecord" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record azurerm_private_dns_cname_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_dns_cname_record.DataAzurermPrivateDnsCnameRecord;

DataAzurermPrivateDnsCnameRecord.Builder.create(Construct scope, java.lang.String id)
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
    .zoneName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermPrivateDnsCnameRecordTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#name DataAzurermPrivateDnsCnameRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#resource_group_name DataAzurermPrivateDnsCnameRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#zone_name DataAzurermPrivateDnsCnameRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#id DataAzurermPrivateDnsCnameRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#name DataAzurermPrivateDnsCnameRecord#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#resource_group_name DataAzurermPrivateDnsCnameRecord#resource_group_name}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.zoneName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#zone_name DataAzurermPrivateDnsCnameRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#id DataAzurermPrivateDnsCnameRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#timeouts DataAzurermPrivateDnsCnameRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermPrivateDnsCnameRecordTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsCnameRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_dns_cname_record.DataAzurermPrivateDnsCnameRecord;

DataAzurermPrivateDnsCnameRecord.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_dns_cname_record.DataAzurermPrivateDnsCnameRecord;

DataAzurermPrivateDnsCnameRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_dns_cname_record.DataAzurermPrivateDnsCnameRecord;

DataAzurermPrivateDnsCnameRecord.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_dns_cname_record.DataAzurermPrivateDnsCnameRecord;

DataAzurermPrivateDnsCnameRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermPrivateDnsCnameRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermPrivateDnsCnameRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermPrivateDnsCnameRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermPrivateDnsCnameRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsCnameRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.record">record</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference">DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.zoneNameInput">zoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.record"></a>

```java
public java.lang.String getRecord();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.timeouts"></a>

```java
public DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference">DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a>

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.zoneNameInput"></a>

```java
public java.lang.String getZoneNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsCnameRecordConfig <a name="DataAzurermPrivateDnsCnameRecordConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_dns_cname_record.DataAzurermPrivateDnsCnameRecordConfig;

DataAzurermPrivateDnsCnameRecordConfig.builder()
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
    .zoneName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermPrivateDnsCnameRecordTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#name DataAzurermPrivateDnsCnameRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#resource_group_name DataAzurermPrivateDnsCnameRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#zone_name DataAzurermPrivateDnsCnameRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#id DataAzurermPrivateDnsCnameRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#name DataAzurermPrivateDnsCnameRecord#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#resource_group_name DataAzurermPrivateDnsCnameRecord#resource_group_name}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#zone_name DataAzurermPrivateDnsCnameRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#id DataAzurermPrivateDnsCnameRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.timeouts"></a>

```java
public DataAzurermPrivateDnsCnameRecordTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#timeouts DataAzurermPrivateDnsCnameRecord#timeouts}

---

### DataAzurermPrivateDnsCnameRecordTimeouts <a name="DataAzurermPrivateDnsCnameRecordTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_dns_cname_record.DataAzurermPrivateDnsCnameRecordTimeouts;

DataAzurermPrivateDnsCnameRecordTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#read DataAzurermPrivateDnsCnameRecord#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_cname_record#read DataAzurermPrivateDnsCnameRecord#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference <a name="DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_dns_cname_record.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference;

new DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a>

---




# `dataAzurermElasticSanVolumeGroup` Submodule <a name="`dataAzurermElasticSanVolumeGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermElasticSanVolumeGroup <a name="DataAzurermElasticSanVolumeGroup" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group azurerm_elastic_san_volume_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroup;

DataAzurermElasticSanVolumeGroup.Builder.create(Construct scope, java.lang.String id)
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
    .elasticSanId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermElasticSanVolumeGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.elasticSanId">elasticSanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#elastic_san_id DataAzurermElasticSanVolumeGroup#elastic_san_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#name DataAzurermElasticSanVolumeGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#id DataAzurermElasticSanVolumeGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `elasticSanId`<sup>Required</sup> <a name="elasticSanId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.elasticSanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#elastic_san_id DataAzurermElasticSanVolumeGroup#elastic_san_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#name DataAzurermElasticSanVolumeGroup#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#id DataAzurermElasticSanVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#timeouts DataAzurermElasticSanVolumeGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermElasticSanVolumeGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroup;

DataAzurermElasticSanVolumeGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroup;

DataAzurermElasticSanVolumeGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroup;

DataAzurermElasticSanVolumeGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroup;

DataAzurermElasticSanVolumeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermElasticSanVolumeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermElasticSanVolumeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermElasticSanVolumeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermElasticSanVolumeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList">DataAzurermElasticSanVolumeGroupEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList">DataAzurermElasticSanVolumeGroupIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.networkRule">networkRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList">DataAzurermElasticSanVolumeGroupNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference">DataAzurermElasticSanVolumeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanIdInput">elasticSanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanId">elasticSanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryption"></a>

```java
public DataAzurermElasticSanVolumeGroupEncryptionList getEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList">DataAzurermElasticSanVolumeGroupEncryptionList</a>

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.identity"></a>

```java
public DataAzurermElasticSanVolumeGroupIdentityList getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList">DataAzurermElasticSanVolumeGroupIdentityList</a>

---

##### `networkRule`<sup>Required</sup> <a name="networkRule" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.networkRule"></a>

```java
public DataAzurermElasticSanVolumeGroupNetworkRuleList getNetworkRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList">DataAzurermElasticSanVolumeGroupNetworkRuleList</a>

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeouts"></a>

```java
public DataAzurermElasticSanVolumeGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference">DataAzurermElasticSanVolumeGroupTimeoutsOutputReference</a>

---

##### `elasticSanIdInput`<sup>Optional</sup> <a name="elasticSanIdInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanIdInput"></a>

```java
public java.lang.String getElasticSanIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

---

##### `elasticSanId`<sup>Required</sup> <a name="elasticSanId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanId"></a>

```java
public java.lang.String getElasticSanId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermElasticSanVolumeGroupConfig <a name="DataAzurermElasticSanVolumeGroupConfig" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupConfig;

DataAzurermElasticSanVolumeGroupConfig.builder()
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
    .elasticSanId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermElasticSanVolumeGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.elasticSanId">elasticSanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#elastic_san_id DataAzurermElasticSanVolumeGroup#elastic_san_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#name DataAzurermElasticSanVolumeGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#id DataAzurermElasticSanVolumeGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `elasticSanId`<sup>Required</sup> <a name="elasticSanId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.elasticSanId"></a>

```java
public java.lang.String getElasticSanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#elastic_san_id DataAzurermElasticSanVolumeGroup#elastic_san_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#name DataAzurermElasticSanVolumeGroup#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#id DataAzurermElasticSanVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.timeouts"></a>

```java
public DataAzurermElasticSanVolumeGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#timeouts DataAzurermElasticSanVolumeGroup#timeouts}

---

### DataAzurermElasticSanVolumeGroupEncryption <a name="DataAzurermElasticSanVolumeGroupEncryption" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupEncryption;

DataAzurermElasticSanVolumeGroupEncryption.builder()
    .build();
```


### DataAzurermElasticSanVolumeGroupIdentity <a name="DataAzurermElasticSanVolumeGroupIdentity" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupIdentity;

DataAzurermElasticSanVolumeGroupIdentity.builder()
    .build();
```


### DataAzurermElasticSanVolumeGroupNetworkRule <a name="DataAzurermElasticSanVolumeGroupNetworkRule" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupNetworkRule;

DataAzurermElasticSanVolumeGroupNetworkRule.builder()
    .build();
```


### DataAzurermElasticSanVolumeGroupTimeouts <a name="DataAzurermElasticSanVolumeGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupTimeouts;

DataAzurermElasticSanVolumeGroupTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#read DataAzurermElasticSanVolumeGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/elastic_san_volume_group#read DataAzurermElasticSanVolumeGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermElasticSanVolumeGroupEncryptionList <a name="DataAzurermElasticSanVolumeGroupEncryptionList" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupEncryptionList;

new DataAzurermElasticSanVolumeGroupEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.get"></a>

```java
public DataAzurermElasticSanVolumeGroupEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermElasticSanVolumeGroupEncryptionOutputReference <a name="DataAzurermElasticSanVolumeGroupEncryptionOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupEncryptionOutputReference;

new DataAzurermElasticSanVolumeGroupEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp">currentVersionedKeyExpirationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId">currentVersionedKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp">lastKeyRotationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption">DataAzurermElasticSanVolumeGroupEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentVersionedKeyExpirationTimestamp`<sup>Required</sup> <a name="currentVersionedKeyExpirationTimestamp" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp"></a>

```java
public java.lang.String getCurrentVersionedKeyExpirationTimestamp();
```

- *Type:* java.lang.String

---

##### `currentVersionedKeyId`<sup>Required</sup> <a name="currentVersionedKeyId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId"></a>

```java
public java.lang.String getCurrentVersionedKeyId();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `lastKeyRotationTimestamp`<sup>Required</sup> <a name="lastKeyRotationTimestamp" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp"></a>

```java
public java.lang.String getLastKeyRotationTimestamp();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.internalValue"></a>

```java
public DataAzurermElasticSanVolumeGroupEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption">DataAzurermElasticSanVolumeGroupEncryption</a>

---


### DataAzurermElasticSanVolumeGroupIdentityList <a name="DataAzurermElasticSanVolumeGroupIdentityList" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupIdentityList;

new DataAzurermElasticSanVolumeGroupIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.get"></a>

```java
public DataAzurermElasticSanVolumeGroupIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermElasticSanVolumeGroupIdentityOutputReference <a name="DataAzurermElasticSanVolumeGroupIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupIdentityOutputReference;

new DataAzurermElasticSanVolumeGroupIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity">DataAzurermElasticSanVolumeGroupIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.internalValue"></a>

```java
public DataAzurermElasticSanVolumeGroupIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity">DataAzurermElasticSanVolumeGroupIdentity</a>

---


### DataAzurermElasticSanVolumeGroupNetworkRuleList <a name="DataAzurermElasticSanVolumeGroupNetworkRuleList" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupNetworkRuleList;

new DataAzurermElasticSanVolumeGroupNetworkRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.get"></a>

```java
public DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference <a name="DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference;

new DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule">DataAzurermElasticSanVolumeGroupNetworkRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue"></a>

```java
public DataAzurermElasticSanVolumeGroupNetworkRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule">DataAzurermElasticSanVolumeGroupNetworkRule</a>

---


### DataAzurermElasticSanVolumeGroupTimeoutsOutputReference <a name="DataAzurermElasticSanVolumeGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_elastic_san_volume_group.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference;

new DataAzurermElasticSanVolumeGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

---




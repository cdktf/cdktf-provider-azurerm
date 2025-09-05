# `dataAzurermVirtualNetworkPeering` Submodule <a name="`dataAzurermVirtualNetworkPeering` Submodule" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualNetworkPeering <a name="DataAzurermVirtualNetworkPeering" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering azurerm_virtual_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_peering.DataAzurermVirtualNetworkPeering;

DataAzurermVirtualNetworkPeering.Builder.create(Construct scope, java.lang.String id)
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
    .virtualNetworkId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermVirtualNetworkPeeringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#name DataAzurermVirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#virtual_network_id DataAzurermVirtualNetworkPeering#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#id DataAzurermVirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#name DataAzurermVirtualNetworkPeering#name}.

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.virtualNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#virtual_network_id DataAzurermVirtualNetworkPeering#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#id DataAzurermVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#timeouts DataAzurermVirtualNetworkPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermVirtualNetworkPeeringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermVirtualNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_peering.DataAzurermVirtualNetworkPeering;

DataAzurermVirtualNetworkPeering.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_peering.DataAzurermVirtualNetworkPeering;

DataAzurermVirtualNetworkPeering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_peering.DataAzurermVirtualNetworkPeering;

DataAzurermVirtualNetworkPeering.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_peering.DataAzurermVirtualNetworkPeering;

DataAzurermVirtualNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermVirtualNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermVirtualNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermVirtualNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermVirtualNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVirtualNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowGatewayTransit">allowGatewayTransit</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowVirtualNetworkAccess">allowVirtualNetworkAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.onlyIpv6PeeringEnabled">onlyIpv6PeeringEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.peerCompleteVirtualNetworksEnabled">peerCompleteVirtualNetworksEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.remoteVirtualNetworkId">remoteVirtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference">DataAzurermVirtualNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.useRemoteGateways">useRemoteGateways</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allowForwardedTraffic`<sup>Required</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowForwardedTraffic"></a>

```java
public IResolvable getAllowForwardedTraffic();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowGatewayTransit`<sup>Required</sup> <a name="allowGatewayTransit" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowGatewayTransit"></a>

```java
public IResolvable getAllowGatewayTransit();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowVirtualNetworkAccess`<sup>Required</sup> <a name="allowVirtualNetworkAccess" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowVirtualNetworkAccess"></a>

```java
public IResolvable getAllowVirtualNetworkAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `onlyIpv6PeeringEnabled`<sup>Required</sup> <a name="onlyIpv6PeeringEnabled" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.onlyIpv6PeeringEnabled"></a>

```java
public IResolvable getOnlyIpv6PeeringEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `peerCompleteVirtualNetworksEnabled`<sup>Required</sup> <a name="peerCompleteVirtualNetworksEnabled" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.peerCompleteVirtualNetworksEnabled"></a>

```java
public IResolvable getPeerCompleteVirtualNetworksEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `remoteVirtualNetworkId`<sup>Required</sup> <a name="remoteVirtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.remoteVirtualNetworkId"></a>

```java
public java.lang.String getRemoteVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeouts"></a>

```java
public DataAzurermVirtualNetworkPeeringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference">DataAzurermVirtualNetworkPeeringTimeoutsOutputReference</a>

---

##### `useRemoteGateways`<sup>Required</sup> <a name="useRemoteGateways" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.useRemoteGateways"></a>

```java
public IResolvable getUseRemoteGateways();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualNetworkPeeringConfig <a name="DataAzurermVirtualNetworkPeeringConfig" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_peering.DataAzurermVirtualNetworkPeeringConfig;

DataAzurermVirtualNetworkPeeringConfig.builder()
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
    .virtualNetworkId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermVirtualNetworkPeeringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#name DataAzurermVirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#virtual_network_id DataAzurermVirtualNetworkPeering#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#id DataAzurermVirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#name DataAzurermVirtualNetworkPeering#name}.

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#virtual_network_id DataAzurermVirtualNetworkPeering#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#id DataAzurermVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.timeouts"></a>

```java
public DataAzurermVirtualNetworkPeeringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#timeouts DataAzurermVirtualNetworkPeering#timeouts}

---

### DataAzurermVirtualNetworkPeeringTimeouts <a name="DataAzurermVirtualNetworkPeeringTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_peering.DataAzurermVirtualNetworkPeeringTimeouts;

DataAzurermVirtualNetworkPeeringTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#read DataAzurermVirtualNetworkPeering#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/virtual_network_peering#read DataAzurermVirtualNetworkPeering#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualNetworkPeeringTimeoutsOutputReference <a name="DataAzurermVirtualNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_peering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference;

new DataAzurermVirtualNetworkPeeringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

---




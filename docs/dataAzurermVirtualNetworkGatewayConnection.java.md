# `dataAzurermVirtualNetworkGatewayConnection` Submodule <a name="`dataAzurermVirtualNetworkGatewayConnection` Submodule" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualNetworkGatewayConnection <a name="DataAzurermVirtualNetworkGatewayConnection" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection azurerm_virtual_network_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnection;

DataAzurermVirtualNetworkGatewayConnection.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermVirtualNetworkGatewayConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#name DataAzurermVirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#resource_group_name DataAzurermVirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#id DataAzurermVirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#name DataAzurermVirtualNetworkGatewayConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#resource_group_name DataAzurermVirtualNetworkGatewayConnection#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#id DataAzurermVirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#timeouts DataAzurermVirtualNetworkGatewayConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermVirtualNetworkGatewayConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermVirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnection;

DataAzurermVirtualNetworkGatewayConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnection;

DataAzurermVirtualNetworkGatewayConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnection;

DataAzurermVirtualNetworkGatewayConnection.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnection;

DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermVirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermVirtualNetworkGatewayConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermVirtualNetworkGatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVirtualNetworkGatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.authorizationKey">authorizationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.connectionProtocol">connectionProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.dpdTimeoutSeconds">dpdTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.egressBytesTransferred">egressBytesTransferred</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.enableBgp">enableBgp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.expressRouteCircuitId">expressRouteCircuitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.expressRouteGatewayBypass">expressRouteGatewayBypass</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.ingressBytesTransferred">ingressBytesTransferred</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.ipsecPolicy">ipsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList">DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.localAzureIpAddressEnabled">localAzureIpAddressEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.localNetworkGatewayId">localNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId">peerVirtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.privateLinkFastPathEnabled">privateLinkFastPathEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGuid">resourceGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.routingWeight">routingWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.sharedKey">sharedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference">DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.trafficSelectorPolicy">trafficSelectorPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList">DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors">usePolicyBasedTrafficSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.virtualNetworkGatewayId">virtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `authorizationKey`<sup>Required</sup> <a name="authorizationKey" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.authorizationKey"></a>

```java
public java.lang.String getAuthorizationKey();
```

- *Type:* java.lang.String

---

##### `connectionProtocol`<sup>Required</sup> <a name="connectionProtocol" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.connectionProtocol"></a>

```java
public java.lang.String getConnectionProtocol();
```

- *Type:* java.lang.String

---

##### `dpdTimeoutSeconds`<sup>Required</sup> <a name="dpdTimeoutSeconds" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.dpdTimeoutSeconds"></a>

```java
public java.lang.Number getDpdTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `egressBytesTransferred`<sup>Required</sup> <a name="egressBytesTransferred" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.egressBytesTransferred"></a>

```java
public java.lang.Number getEgressBytesTransferred();
```

- *Type:* java.lang.Number

---

##### `enableBgp`<sup>Required</sup> <a name="enableBgp" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.enableBgp"></a>

```java
public IResolvable getEnableBgp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expressRouteCircuitId`<sup>Required</sup> <a name="expressRouteCircuitId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.expressRouteCircuitId"></a>

```java
public java.lang.String getExpressRouteCircuitId();
```

- *Type:* java.lang.String

---

##### `expressRouteGatewayBypass`<sup>Required</sup> <a name="expressRouteGatewayBypass" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.expressRouteGatewayBypass"></a>

```java
public IResolvable getExpressRouteGatewayBypass();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ingressBytesTransferred`<sup>Required</sup> <a name="ingressBytesTransferred" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.ingressBytesTransferred"></a>

```java
public java.lang.Number getIngressBytesTransferred();
```

- *Type:* java.lang.Number

---

##### `ipsecPolicy`<sup>Required</sup> <a name="ipsecPolicy" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.ipsecPolicy"></a>

```java
public DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList getIpsecPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList">DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList</a>

---

##### `localAzureIpAddressEnabled`<sup>Required</sup> <a name="localAzureIpAddressEnabled" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.localAzureIpAddressEnabled"></a>

```java
public IResolvable getLocalAzureIpAddressEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `localNetworkGatewayId`<sup>Required</sup> <a name="localNetworkGatewayId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.localNetworkGatewayId"></a>

```java
public java.lang.String getLocalNetworkGatewayId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `peerVirtualNetworkGatewayId`<sup>Required</sup> <a name="peerVirtualNetworkGatewayId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId"></a>

```java
public java.lang.String getPeerVirtualNetworkGatewayId();
```

- *Type:* java.lang.String

---

##### `privateLinkFastPathEnabled`<sup>Required</sup> <a name="privateLinkFastPathEnabled" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.privateLinkFastPathEnabled"></a>

```java
public IResolvable getPrivateLinkFastPathEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `resourceGuid`<sup>Required</sup> <a name="resourceGuid" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGuid"></a>

```java
public java.lang.String getResourceGuid();
```

- *Type:* java.lang.String

---

##### `routingWeight`<sup>Required</sup> <a name="routingWeight" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.routingWeight"></a>

```java
public java.lang.Number getRoutingWeight();
```

- *Type:* java.lang.Number

---

##### `sharedKey`<sup>Required</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.sharedKey"></a>

```java
public java.lang.String getSharedKey();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.timeouts"></a>

```java
public DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference">DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference</a>

---

##### `trafficSelectorPolicy`<sup>Required</sup> <a name="trafficSelectorPolicy" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.trafficSelectorPolicy"></a>

```java
public DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList getTrafficSelectorPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList">DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usePolicyBasedTrafficSelectors`<sup>Required</sup> <a name="usePolicyBasedTrafficSelectors" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors"></a>

```java
public IResolvable getUsePolicyBasedTrafficSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `virtualNetworkGatewayId`<sup>Required</sup> <a name="virtualNetworkGatewayId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.virtualNetworkGatewayId"></a>

```java
public java.lang.String getVirtualNetworkGatewayId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualNetworkGatewayConnectionConfig <a name="DataAzurermVirtualNetworkGatewayConnectionConfig" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnectionConfig;

DataAzurermVirtualNetworkGatewayConnectionConfig.builder()
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
//  .timeouts(DataAzurermVirtualNetworkGatewayConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#name DataAzurermVirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#resource_group_name DataAzurermVirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#id DataAzurermVirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#name DataAzurermVirtualNetworkGatewayConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#resource_group_name DataAzurermVirtualNetworkGatewayConnection#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#id DataAzurermVirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.timeouts"></a>

```java
public DataAzurermVirtualNetworkGatewayConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#timeouts DataAzurermVirtualNetworkGatewayConnection#timeouts}

---

### DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy <a name="DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy;

DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy.builder()
    .build();
```


### DataAzurermVirtualNetworkGatewayConnectionTimeouts <a name="DataAzurermVirtualNetworkGatewayConnectionTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnectionTimeouts;

DataAzurermVirtualNetworkGatewayConnectionTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#read DataAzurermVirtualNetworkGatewayConnection#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/virtual_network_gateway_connection#read DataAzurermVirtualNetworkGatewayConnection#read}.

---

### DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy <a name="DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy;

DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList <a name="DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList;

new DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.get"></a>

```java
public DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference <a name="DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference;

new DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup">dhGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption">ikeEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity">ikeIntegrity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption">ipsecEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity">ipsecIntegrity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup">pfsGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize">saDatasize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime">saLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy">DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup"></a>

```java
public java.lang.String getDhGroup();
```

- *Type:* java.lang.String

---

##### `ikeEncryption`<sup>Required</sup> <a name="ikeEncryption" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption"></a>

```java
public java.lang.String getIkeEncryption();
```

- *Type:* java.lang.String

---

##### `ikeIntegrity`<sup>Required</sup> <a name="ikeIntegrity" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```java
public java.lang.String getIkeIntegrity();
```

- *Type:* java.lang.String

---

##### `ipsecEncryption`<sup>Required</sup> <a name="ipsecEncryption" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```java
public java.lang.String getIpsecEncryption();
```

- *Type:* java.lang.String

---

##### `ipsecIntegrity`<sup>Required</sup> <a name="ipsecIntegrity" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```java
public java.lang.String getIpsecIntegrity();
```

- *Type:* java.lang.String

---

##### `pfsGroup`<sup>Required</sup> <a name="pfsGroup" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup"></a>

```java
public java.lang.String getPfsGroup();
```

- *Type:* java.lang.String

---

##### `saDatasize`<sup>Required</sup> <a name="saDatasize" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize"></a>

```java
public java.lang.Number getSaDatasize();
```

- *Type:* java.lang.Number

---

##### `saLifetime`<sup>Required</sup> <a name="saLifetime" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime"></a>

```java
public java.lang.Number getSaLifetime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue"></a>

```java
public DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy">DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy</a>

---


### DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference <a name="DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference;

new DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a>

---


### DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList <a name="DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList;

new DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get"></a>

```java
public DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference <a name="DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_network_gateway_connection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference;

new DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrs">localAddressCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrs">remoteAddressCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy">DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localAddressCidrs`<sup>Required</sup> <a name="localAddressCidrs" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrs"></a>

```java
public java.util.List<java.lang.String> getLocalAddressCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remoteAddressCidrs`<sup>Required</sup> <a name="remoteAddressCidrs" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrs"></a>

```java
public java.util.List<java.lang.String> getRemoteAddressCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue"></a>

```java
public DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy">DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>

---




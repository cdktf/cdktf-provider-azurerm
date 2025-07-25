# `dataAzurermPrivateLinkServiceEndpointConnections` Submodule <a name="`dataAzurermPrivateLinkServiceEndpointConnections` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateLinkServiceEndpointConnections <a name="DataAzurermPrivateLinkServiceEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections azurerm_private_link_service_endpoint_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnections;

DataAzurermPrivateLinkServiceEndpointConnections.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
    .serviceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#resource_group_name DataAzurermPrivateLinkServiceEndpointConnections#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#service_id DataAzurermPrivateLinkServiceEndpointConnections#service_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#id DataAzurermPrivateLinkServiceEndpointConnections#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#resource_group_name DataAzurermPrivateLinkServiceEndpointConnections#resource_group_name}.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#service_id DataAzurermPrivateLinkServiceEndpointConnections#service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#id DataAzurermPrivateLinkServiceEndpointConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#timeouts DataAzurermPrivateLinkServiceEndpointConnections#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPrivateLinkServiceEndpointConnections resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnections;

DataAzurermPrivateLinkServiceEndpointConnections.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnections;

DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnections;

DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnections;

DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermPrivateLinkServiceEndpointConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermPrivateLinkServiceEndpointConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermPrivateLinkServiceEndpointConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateLinkServiceEndpointConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.privateEndpointConnections">privateEndpointConnections</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference">DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `privateEndpointConnections`<sup>Required</sup> <a name="privateEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.privateEndpointConnections"></a>

```java
public DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList getPrivateEndpointConnections();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList</a>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeouts"></a>

```java
public DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference">DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateLinkServiceEndpointConnectionsConfig <a name="DataAzurermPrivateLinkServiceEndpointConnectionsConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig;

DataAzurermPrivateLinkServiceEndpointConnectionsConfig.builder()
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
    .resourceGroupName(java.lang.String)
    .serviceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#resource_group_name DataAzurermPrivateLinkServiceEndpointConnections#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#service_id DataAzurermPrivateLinkServiceEndpointConnections#service_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#id DataAzurermPrivateLinkServiceEndpointConnections#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#resource_group_name DataAzurermPrivateLinkServiceEndpointConnections#resource_group_name}.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#service_id DataAzurermPrivateLinkServiceEndpointConnections#service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#id DataAzurermPrivateLinkServiceEndpointConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.timeouts"></a>

```java
public DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#timeouts DataAzurermPrivateLinkServiceEndpointConnections#timeouts}

---

### DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections <a name="DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections;

DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections.builder()
    .build();
```


### DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts <a name="DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts;

DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#read DataAzurermPrivateLinkServiceEndpointConnections#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/private_link_service_endpoint_connections#read DataAzurermPrivateLinkServiceEndpointConnections#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList <a name="DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList;

new DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.get"></a>

```java
public DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference <a name="DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference;

new DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.actionRequired">actionRequired</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointName">privateEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionRequired`<sup>Required</sup> <a name="actionRequired" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.actionRequired"></a>

```java
public java.lang.String getActionRequired();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointId"></a>

```java
public java.lang.String getPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `privateEndpointName`<sup>Required</sup> <a name="privateEndpointName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointName"></a>

```java
public java.lang.String getPrivateEndpointName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.internalValue"></a>

```java
public DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections</a>

---


### DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference <a name="DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_private_link_service_endpoint_connections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference;

new DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a>

---




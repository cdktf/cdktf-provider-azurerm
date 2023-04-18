# `azurerm_network_interface_application_gateway_backend_address_pool_association`

Refer to the Terraform Registory for docs: [`azurerm_network_interface_application_gateway_backend_address_pool_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association).

# `networkInterfaceApplicationGatewayBackendAddressPoolAssociation` Submodule <a name="`networkInterfaceApplicationGatewayBackendAddressPoolAssociation` Submodule" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association azurerm_network_interface_application_gateway_backend_address_pool_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_interface_application_gateway_backend_address_pool_association.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation;

NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .backendAddressPoolId(java.lang.String)
    .ipConfigurationName(java.lang.String)
    .networkInterfaceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.backendAddressPoolId">backendAddressPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.ipConfigurationName">ipConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendAddressPoolId`<sup>Required</sup> <a name="backendAddressPoolId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.backendAddressPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}.

---

##### `ipConfigurationName`<sup>Required</sup> <a name="ipConfigurationName" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.ipConfigurationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#timeouts NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts"></a>

```java
public void putTimeouts(NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_interface_application_gateway_backend_address_pool_association.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation;

NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_interface_application_gateway_backend_address_pool_association.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation;

NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_interface_application_gateway_backend_address_pool_association.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation;

NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolIdInput">backendAddressPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationNameInput">ipConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolId">backendAddressPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationName">ipConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeouts"></a>

```java
public NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference</a>

---

##### `backendAddressPoolIdInput`<sup>Optional</sup> <a name="backendAddressPoolIdInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolIdInput"></a>

```java
public java.lang.String getBackendAddressPoolIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipConfigurationNameInput`<sup>Optional</sup> <a name="ipConfigurationNameInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationNameInput"></a>

```java
public java.lang.String getIpConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `backendAddressPoolId`<sup>Required</sup> <a name="backendAddressPoolId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolId"></a>

```java
public java.lang.String getBackendAddressPoolId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipConfigurationName`<sup>Required</sup> <a name="ipConfigurationName" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationName"></a>

```java
public java.lang.String getIpConfigurationName();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_interface_application_gateway_backend_address_pool_association.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig;

NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.builder()
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
    .backendAddressPoolId(java.lang.String)
    .ipConfigurationName(java.lang.String)
    .networkInterfaceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.backendAddressPoolId">backendAddressPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.ipConfigurationName">ipConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendAddressPoolId`<sup>Required</sup> <a name="backendAddressPoolId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.backendAddressPoolId"></a>

```java
public java.lang.String getBackendAddressPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}.

---

##### `ipConfigurationName`<sup>Required</sup> <a name="ipConfigurationName" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.ipConfigurationName"></a>

```java
public java.lang.String getIpConfigurationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.timeouts"></a>

```java
public NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#timeouts NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#timeouts}

---

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_interface_application_gateway_backend_address_pool_association.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts;

NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#create NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#delete NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#read NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#update NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#create NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#delete NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#read NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#update NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_interface_application_gateway_backend_address_pool_association.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference;

new NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---




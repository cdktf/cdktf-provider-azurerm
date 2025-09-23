# `apiManagementStandaloneGateway` Submodule <a name="`apiManagementStandaloneGateway` Submodule" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementStandaloneGateway <a name="ApiManagementStandaloneGateway" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway azurerm_api_management_standalone_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_standalone_gateway.ApiManagementStandaloneGateway;

ApiManagementStandaloneGateway.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sku(ApiManagementStandaloneGatewaySku)
//  .backendSubnetId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ApiManagementStandaloneGatewayTimeouts)
//  .virtualNetworkType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#location ApiManagementStandaloneGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#name ApiManagementStandaloneGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#resource_group_name ApiManagementStandaloneGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku">ApiManagementStandaloneGatewaySku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.backendSubnetId">backendSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#backend_subnet_id ApiManagementStandaloneGateway#backend_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#id ApiManagementStandaloneGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#tags ApiManagementStandaloneGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts">ApiManagementStandaloneGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.virtualNetworkType">virtualNetworkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#virtual_network_type ApiManagementStandaloneGateway#virtual_network_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#location ApiManagementStandaloneGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#name ApiManagementStandaloneGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#resource_group_name ApiManagementStandaloneGateway#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.sku"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku">ApiManagementStandaloneGatewaySku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#sku ApiManagementStandaloneGateway#sku}

---

##### `backendSubnetId`<sup>Optional</sup> <a name="backendSubnetId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.backendSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#backend_subnet_id ApiManagementStandaloneGateway#backend_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#id ApiManagementStandaloneGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#tags ApiManagementStandaloneGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts">ApiManagementStandaloneGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#timeouts ApiManagementStandaloneGateway#timeouts}

---

##### `virtualNetworkType`<sup>Optional</sup> <a name="virtualNetworkType" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.Initializer.parameter.virtualNetworkType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#virtual_network_type ApiManagementStandaloneGateway#virtual_network_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.putSku">putSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetBackendSubnetId">resetBackendSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetVirtualNetworkType">resetVirtualNetworkType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSku` <a name="putSku" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.putSku"></a>

```java
public void putSku(ApiManagementStandaloneGatewaySku value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku">ApiManagementStandaloneGatewaySku</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementStandaloneGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts">ApiManagementStandaloneGatewayTimeouts</a>

---

##### `resetBackendSubnetId` <a name="resetBackendSubnetId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetBackendSubnetId"></a>

```java
public void resetBackendSubnetId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualNetworkType` <a name="resetVirtualNetworkType" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.resetVirtualNetworkType"></a>

```java
public void resetVirtualNetworkType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementStandaloneGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_standalone_gateway.ApiManagementStandaloneGateway;

ApiManagementStandaloneGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_standalone_gateway.ApiManagementStandaloneGateway;

ApiManagementStandaloneGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_standalone_gateway.ApiManagementStandaloneGateway;

ApiManagementStandaloneGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_standalone_gateway.ApiManagementStandaloneGateway;

ApiManagementStandaloneGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiManagementStandaloneGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiManagementStandaloneGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiManagementStandaloneGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiManagementStandaloneGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementStandaloneGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference">ApiManagementStandaloneGatewaySkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference">ApiManagementStandaloneGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.backendSubnetIdInput">backendSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.skuInput">skuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku">ApiManagementStandaloneGatewaySku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts">ApiManagementStandaloneGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.virtualNetworkTypeInput">virtualNetworkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.backendSubnetId">backendSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.virtualNetworkType">virtualNetworkType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.sku"></a>

```java
public ApiManagementStandaloneGatewaySkuOutputReference getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference">ApiManagementStandaloneGatewaySkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.timeouts"></a>

```java
public ApiManagementStandaloneGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference">ApiManagementStandaloneGatewayTimeoutsOutputReference</a>

---

##### `backendSubnetIdInput`<sup>Optional</sup> <a name="backendSubnetIdInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.backendSubnetIdInput"></a>

```java
public java.lang.String getBackendSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.skuInput"></a>

```java
public ApiManagementStandaloneGatewaySku getSkuInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku">ApiManagementStandaloneGatewaySku</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts">ApiManagementStandaloneGatewayTimeouts</a>

---

##### `virtualNetworkTypeInput`<sup>Optional</sup> <a name="virtualNetworkTypeInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.virtualNetworkTypeInput"></a>

```java
public java.lang.String getVirtualNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `backendSubnetId`<sup>Required</sup> <a name="backendSubnetId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.backendSubnetId"></a>

```java
public java.lang.String getBackendSubnetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualNetworkType`<sup>Required</sup> <a name="virtualNetworkType" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.virtualNetworkType"></a>

```java
public java.lang.String getVirtualNetworkType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementStandaloneGatewayConfig <a name="ApiManagementStandaloneGatewayConfig" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_standalone_gateway.ApiManagementStandaloneGatewayConfig;

ApiManagementStandaloneGatewayConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sku(ApiManagementStandaloneGatewaySku)
//  .backendSubnetId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ApiManagementStandaloneGatewayTimeouts)
//  .virtualNetworkType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#location ApiManagementStandaloneGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#name ApiManagementStandaloneGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#resource_group_name ApiManagementStandaloneGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku">ApiManagementStandaloneGatewaySku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.backendSubnetId">backendSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#backend_subnet_id ApiManagementStandaloneGateway#backend_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#id ApiManagementStandaloneGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#tags ApiManagementStandaloneGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts">ApiManagementStandaloneGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.virtualNetworkType">virtualNetworkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#virtual_network_type ApiManagementStandaloneGateway#virtual_network_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#location ApiManagementStandaloneGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#name ApiManagementStandaloneGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#resource_group_name ApiManagementStandaloneGateway#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.sku"></a>

```java
public ApiManagementStandaloneGatewaySku getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku">ApiManagementStandaloneGatewaySku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#sku ApiManagementStandaloneGateway#sku}

---

##### `backendSubnetId`<sup>Optional</sup> <a name="backendSubnetId" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.backendSubnetId"></a>

```java
public java.lang.String getBackendSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#backend_subnet_id ApiManagementStandaloneGateway#backend_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#id ApiManagementStandaloneGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#tags ApiManagementStandaloneGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.timeouts"></a>

```java
public ApiManagementStandaloneGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts">ApiManagementStandaloneGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#timeouts ApiManagementStandaloneGateway#timeouts}

---

##### `virtualNetworkType`<sup>Optional</sup> <a name="virtualNetworkType" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayConfig.property.virtualNetworkType"></a>

```java
public java.lang.String getVirtualNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#virtual_network_type ApiManagementStandaloneGateway#virtual_network_type}.

---

### ApiManagementStandaloneGatewaySku <a name="ApiManagementStandaloneGatewaySku" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_standalone_gateway.ApiManagementStandaloneGatewaySku;

ApiManagementStandaloneGatewaySku.builder()
    .name(java.lang.String)
//  .capacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#name ApiManagementStandaloneGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#capacity ApiManagementStandaloneGateway#capacity}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#name ApiManagementStandaloneGateway#name}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#capacity ApiManagementStandaloneGateway#capacity}.

---

### ApiManagementStandaloneGatewayTimeouts <a name="ApiManagementStandaloneGatewayTimeouts" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_standalone_gateway.ApiManagementStandaloneGatewayTimeouts;

ApiManagementStandaloneGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#create ApiManagementStandaloneGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#delete ApiManagementStandaloneGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#read ApiManagementStandaloneGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#update ApiManagementStandaloneGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#create ApiManagementStandaloneGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#delete ApiManagementStandaloneGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#read ApiManagementStandaloneGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_standalone_gateway#update ApiManagementStandaloneGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementStandaloneGatewaySkuOutputReference <a name="ApiManagementStandaloneGatewaySkuOutputReference" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_standalone_gateway.ApiManagementStandaloneGatewaySkuOutputReference;

new ApiManagementStandaloneGatewaySkuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.resetCapacity"></a>

```java
public void resetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.capacityInput">capacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku">ApiManagementStandaloneGatewaySku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.capacityInput"></a>

```java
public java.lang.Number getCapacityInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySkuOutputReference.property.internalValue"></a>

```java
public ApiManagementStandaloneGatewaySku getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewaySku">ApiManagementStandaloneGatewaySku</a>

---


### ApiManagementStandaloneGatewayTimeoutsOutputReference <a name="ApiManagementStandaloneGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_standalone_gateway.ApiManagementStandaloneGatewayTimeoutsOutputReference;

new ApiManagementStandaloneGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts">ApiManagementStandaloneGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementStandaloneGateway.ApiManagementStandaloneGatewayTimeouts">ApiManagementStandaloneGatewayTimeouts</a>

---




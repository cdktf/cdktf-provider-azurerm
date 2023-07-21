# `azurerm_databricks_virtual_network_peering`

Refer to the Terraform Registory for docs: [`azurerm_databricks_virtual_network_peering`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering).

# `databricksVirtualNetworkPeering` Submodule <a name="`databricksVirtualNetworkPeering` Submodule" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksVirtualNetworkPeering <a name="DatabricksVirtualNetworkPeering" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering azurerm_databricks_virtual_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_virtual_network_peering.DatabricksVirtualNetworkPeering;

DatabricksVirtualNetworkPeering.Builder.create(Construct scope, java.lang.String id)
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
    .remoteAddressSpacePrefixes(java.util.List<java.lang.String>)
    .remoteVirtualNetworkId(java.lang.String)
    .resourceGroupName(java.lang.String)
    .workspaceId(java.lang.String)
//  .allowForwardedTraffic(java.lang.Boolean)
//  .allowForwardedTraffic(IResolvable)
//  .allowGatewayTransit(java.lang.Boolean)
//  .allowGatewayTransit(IResolvable)
//  .allowVirtualNetworkAccess(java.lang.Boolean)
//  .allowVirtualNetworkAccess(IResolvable)
//  .id(java.lang.String)
//  .timeouts(DatabricksVirtualNetworkPeeringTimeouts)
//  .useRemoteGateways(java.lang.Boolean)
//  .useRemoteGateways(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.remoteAddressSpacePrefixes">remoteAddressSpacePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.remoteVirtualNetworkId">remoteVirtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowGatewayTransit">allowGatewayTransit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowVirtualNetworkAccess">allowVirtualNetworkAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.useRemoteGateways">useRemoteGateways</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}.

---

##### `remoteAddressSpacePrefixes`<sup>Required</sup> <a name="remoteAddressSpacePrefixes" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.remoteAddressSpacePrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}.

---

##### `remoteVirtualNetworkId`<sup>Required</sup> <a name="remoteVirtualNetworkId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.remoteVirtualNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}.

---

##### `allowForwardedTraffic`<sup>Optional</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowForwardedTraffic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}.

---

##### `allowGatewayTransit`<sup>Optional</sup> <a name="allowGatewayTransit" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowGatewayTransit"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}.

---

##### `allowVirtualNetworkAccess`<sup>Optional</sup> <a name="allowVirtualNetworkAccess" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowVirtualNetworkAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#timeouts DatabricksVirtualNetworkPeering#timeouts}

---

##### `useRemoteGateways`<sup>Optional</sup> <a name="useRemoteGateways" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.useRemoteGateways"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowForwardedTraffic">resetAllowForwardedTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowGatewayTransit">resetAllowGatewayTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowVirtualNetworkAccess">resetAllowVirtualNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetUseRemoteGateways">resetUseRemoteGateways</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts"></a>

```java
public void putTimeouts(DatabricksVirtualNetworkPeeringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---

##### `resetAllowForwardedTraffic` <a name="resetAllowForwardedTraffic" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowForwardedTraffic"></a>

```java
public void resetAllowForwardedTraffic()
```

##### `resetAllowGatewayTransit` <a name="resetAllowGatewayTransit" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowGatewayTransit"></a>

```java
public void resetAllowGatewayTransit()
```

##### `resetAllowVirtualNetworkAccess` <a name="resetAllowVirtualNetworkAccess" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowVirtualNetworkAccess"></a>

```java
public void resetAllowVirtualNetworkAccess()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseRemoteGateways` <a name="resetUseRemoteGateways" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetUseRemoteGateways"></a>

```java
public void resetUseRemoteGateways()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_virtual_network_peering.DatabricksVirtualNetworkPeering;

DatabricksVirtualNetworkPeering.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_virtual_network_peering.DatabricksVirtualNetworkPeering;

DatabricksVirtualNetworkPeering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_virtual_network_peering.DatabricksVirtualNetworkPeering;

DatabricksVirtualNetworkPeering.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.addressSpacePrefixes">addressSpacePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference">DatabricksVirtualNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTrafficInput">allowForwardedTrafficInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransitInput">allowGatewayTransitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccessInput">allowVirtualNetworkAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixesInput">remoteAddressSpacePrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkIdInput">remoteVirtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGatewaysInput">useRemoteGatewaysInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransit">allowGatewayTransit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccess">allowVirtualNetworkAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixes">remoteAddressSpacePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkId">remoteVirtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGateways">useRemoteGateways</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressSpacePrefixes`<sup>Required</sup> <a name="addressSpacePrefixes" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.addressSpacePrefixes"></a>

```java
public java.util.List<java.lang.String> getAddressSpacePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeouts"></a>

```java
public DatabricksVirtualNetworkPeeringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference">DatabricksVirtualNetworkPeeringTimeoutsOutputReference</a>

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `allowForwardedTrafficInput`<sup>Optional</sup> <a name="allowForwardedTrafficInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTrafficInput"></a>

```java
public java.lang.Object getAllowForwardedTrafficInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowGatewayTransitInput`<sup>Optional</sup> <a name="allowGatewayTransitInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransitInput"></a>

```java
public java.lang.Object getAllowGatewayTransitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowVirtualNetworkAccessInput`<sup>Optional</sup> <a name="allowVirtualNetworkAccessInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccessInput"></a>

```java
public java.lang.Object getAllowVirtualNetworkAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `remoteAddressSpacePrefixesInput`<sup>Optional</sup> <a name="remoteAddressSpacePrefixesInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixesInput"></a>

```java
public java.util.List<java.lang.String> getRemoteAddressSpacePrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remoteVirtualNetworkIdInput`<sup>Optional</sup> <a name="remoteVirtualNetworkIdInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkIdInput"></a>

```java
public java.lang.String getRemoteVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---

##### `useRemoteGatewaysInput`<sup>Optional</sup> <a name="useRemoteGatewaysInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGatewaysInput"></a>

```java
public java.lang.Object getUseRemoteGatewaysInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `allowForwardedTraffic`<sup>Required</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTraffic"></a>

```java
public java.lang.Object getAllowForwardedTraffic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowGatewayTransit`<sup>Required</sup> <a name="allowGatewayTransit" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransit"></a>

```java
public java.lang.Object getAllowGatewayTransit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowVirtualNetworkAccess`<sup>Required</sup> <a name="allowVirtualNetworkAccess" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccess"></a>

```java
public java.lang.Object getAllowVirtualNetworkAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `remoteAddressSpacePrefixes`<sup>Required</sup> <a name="remoteAddressSpacePrefixes" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixes"></a>

```java
public java.util.List<java.lang.String> getRemoteAddressSpacePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remoteVirtualNetworkId`<sup>Required</sup> <a name="remoteVirtualNetworkId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkId"></a>

```java
public java.lang.String getRemoteVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `useRemoteGateways`<sup>Required</sup> <a name="useRemoteGateways" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGateways"></a>

```java
public java.lang.Object getUseRemoteGateways();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksVirtualNetworkPeeringConfig <a name="DatabricksVirtualNetworkPeeringConfig" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_virtual_network_peering.DatabricksVirtualNetworkPeeringConfig;

DatabricksVirtualNetworkPeeringConfig.builder()
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
    .remoteAddressSpacePrefixes(java.util.List<java.lang.String>)
    .remoteVirtualNetworkId(java.lang.String)
    .resourceGroupName(java.lang.String)
    .workspaceId(java.lang.String)
//  .allowForwardedTraffic(java.lang.Boolean)
//  .allowForwardedTraffic(IResolvable)
//  .allowGatewayTransit(java.lang.Boolean)
//  .allowGatewayTransit(IResolvable)
//  .allowVirtualNetworkAccess(java.lang.Boolean)
//  .allowVirtualNetworkAccess(IResolvable)
//  .id(java.lang.String)
//  .timeouts(DatabricksVirtualNetworkPeeringTimeouts)
//  .useRemoteGateways(java.lang.Boolean)
//  .useRemoteGateways(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteAddressSpacePrefixes">remoteAddressSpacePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteVirtualNetworkId">remoteVirtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowGatewayTransit">allowGatewayTransit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess">allowVirtualNetworkAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.useRemoteGateways">useRemoteGateways</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}.

---

##### `remoteAddressSpacePrefixes`<sup>Required</sup> <a name="remoteAddressSpacePrefixes" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteAddressSpacePrefixes"></a>

```java
public java.util.List<java.lang.String> getRemoteAddressSpacePrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}.

---

##### `remoteVirtualNetworkId`<sup>Required</sup> <a name="remoteVirtualNetworkId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteVirtualNetworkId"></a>

```java
public java.lang.String getRemoteVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}.

---

##### `allowForwardedTraffic`<sup>Optional</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowForwardedTraffic"></a>

```java
public java.lang.Object getAllowForwardedTraffic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}.

---

##### `allowGatewayTransit`<sup>Optional</sup> <a name="allowGatewayTransit" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowGatewayTransit"></a>

```java
public java.lang.Object getAllowGatewayTransit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}.

---

##### `allowVirtualNetworkAccess`<sup>Optional</sup> <a name="allowVirtualNetworkAccess" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess"></a>

```java
public java.lang.Object getAllowVirtualNetworkAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.timeouts"></a>

```java
public DatabricksVirtualNetworkPeeringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#timeouts DatabricksVirtualNetworkPeering#timeouts}

---

##### `useRemoteGateways`<sup>Optional</sup> <a name="useRemoteGateways" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.useRemoteGateways"></a>

```java
public java.lang.Object getUseRemoteGateways();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}.

---

### DatabricksVirtualNetworkPeeringTimeouts <a name="DatabricksVirtualNetworkPeeringTimeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_virtual_network_peering.DatabricksVirtualNetworkPeeringTimeouts;

DatabricksVirtualNetworkPeeringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksVirtualNetworkPeeringTimeoutsOutputReference <a name="DatabricksVirtualNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_virtual_network_peering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference;

new DatabricksVirtualNetworkPeeringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---




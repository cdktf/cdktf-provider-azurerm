# `azurerm_point_to_site_vpn_gateway`

Refer to the Terraform Registory for docs: [`azurerm_point_to_site_vpn_gateway`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway).

# `pointToSiteVpnGateway` Submodule <a name="`pointToSiteVpnGateway` Submodule" id="@cdktf/provider-azurerm.pointToSiteVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PointToSiteVpnGateway <a name="PointToSiteVpnGateway" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway azurerm_point_to_site_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGateway;

PointToSiteVpnGateway.Builder.create(Construct scope, java.lang.String id)
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
    .connectionConfiguration(PointToSiteVpnGatewayConnectionConfiguration)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scaleUnit(java.lang.Number)
    .virtualHubId(java.lang.String)
    .vpnServerConfigurationId(java.lang.String)
//  .dnsServers(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .routingPreferenceInternetEnabled(java.lang.Boolean)
//  .routingPreferenceInternetEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PointToSiteVpnGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scaleUnit">scaleUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.virtualHubId">virtualHubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.vpnServerConfigurationId">vpnServerConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.routingPreferenceInternetEnabled">routingPreferenceInternetEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.connectionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#connection_configuration PointToSiteVpnGateway#connection_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}.

---

##### `scaleUnit`<sup>Required</sup> <a name="scaleUnit" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scaleUnit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}.

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.virtualHubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}.

---

##### `vpnServerConfigurationId`<sup>Required</sup> <a name="vpnServerConfigurationId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.vpnServerConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.dnsServers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingPreferenceInternetEnabled`<sup>Optional</sup> <a name="routingPreferenceInternetEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.routingPreferenceInternetEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#timeouts PointToSiteVpnGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration">putConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetRoutingPreferenceInternetEnabled">resetRoutingPreferenceInternetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConnectionConfiguration` <a name="putConnectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration"></a>

```java
public void putConnectionConfiguration(PointToSiteVpnGatewayConnectionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts"></a>

```java
public void putTimeouts(PointToSiteVpnGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

---

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetDnsServers"></a>

```java
public void resetDnsServers()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetId"></a>

```java
public void resetId()
```

##### `resetRoutingPreferenceInternetEnabled` <a name="resetRoutingPreferenceInternetEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetRoutingPreferenceInternetEnabled"></a>

```java
public void resetRoutingPreferenceInternetEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGateway;

PointToSiteVpnGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGateway;

PointToSiteVpnGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGateway;

PointToSiteVpnGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference">PointToSiteVpnGatewayConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference">PointToSiteVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfigurationInput">connectionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServersInput">dnsServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabledInput">routingPreferenceInternetEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnitInput">scaleUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubIdInput">virtualHubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationIdInput">vpnServerConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabled">routingPreferenceInternetEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnit">scaleUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubId">virtualHubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationId">vpnServerConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfiguration"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationOutputReference getConnectionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference">PointToSiteVpnGatewayConnectionConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeouts"></a>

```java
public PointToSiteVpnGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference">PointToSiteVpnGatewayTimeoutsOutputReference</a>

---

##### `connectionConfigurationInput`<sup>Optional</sup> <a name="connectionConfigurationInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfigurationInput"></a>

```java
public PointToSiteVpnGatewayConnectionConfiguration getConnectionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServersInput"></a>

```java
public java.util.List<java.lang.String> getDnsServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `routingPreferenceInternetEnabledInput`<sup>Optional</sup> <a name="routingPreferenceInternetEnabledInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabledInput"></a>

```java
public java.lang.Object getRoutingPreferenceInternetEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scaleUnitInput`<sup>Optional</sup> <a name="scaleUnitInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnitInput"></a>

```java
public java.lang.Number getScaleUnitInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `virtualHubIdInput`<sup>Optional</sup> <a name="virtualHubIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubIdInput"></a>

```java
public java.lang.String getVirtualHubIdInput();
```

- *Type:* java.lang.String

---

##### `vpnServerConfigurationIdInput`<sup>Optional</sup> <a name="vpnServerConfigurationIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationIdInput"></a>

```java
public java.lang.String getVpnServerConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `routingPreferenceInternetEnabled`<sup>Required</sup> <a name="routingPreferenceInternetEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabled"></a>

```java
public java.lang.Object getRoutingPreferenceInternetEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scaleUnit`<sup>Required</sup> <a name="scaleUnit" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnit"></a>

```java
public java.lang.Number getScaleUnit();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubId"></a>

```java
public java.lang.String getVirtualHubId();
```

- *Type:* java.lang.String

---

##### `vpnServerConfigurationId`<sup>Required</sup> <a name="vpnServerConfigurationId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationId"></a>

```java
public java.lang.String getVpnServerConfigurationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PointToSiteVpnGatewayConfig <a name="PointToSiteVpnGatewayConfig" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayConfig;

PointToSiteVpnGatewayConfig.builder()
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
    .connectionConfiguration(PointToSiteVpnGatewayConnectionConfiguration)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scaleUnit(java.lang.Number)
    .virtualHubId(java.lang.String)
    .vpnServerConfigurationId(java.lang.String)
//  .dnsServers(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .routingPreferenceInternetEnabled(java.lang.Boolean)
//  .routingPreferenceInternetEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PointToSiteVpnGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.scaleUnit">scaleUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.virtualHubId">virtualHubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.vpnServerConfigurationId">vpnServerConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.routingPreferenceInternetEnabled">routingPreferenceInternetEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connectionConfiguration"></a>

```java
public PointToSiteVpnGatewayConnectionConfiguration getConnectionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#connection_configuration PointToSiteVpnGateway#connection_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}.

---

##### `scaleUnit`<sup>Required</sup> <a name="scaleUnit" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.scaleUnit"></a>

```java
public java.lang.Number getScaleUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}.

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.virtualHubId"></a>

```java
public java.lang.String getVirtualHubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}.

---

##### `vpnServerConfigurationId`<sup>Required</sup> <a name="vpnServerConfigurationId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.vpnServerConfigurationId"></a>

```java
public java.lang.String getVpnServerConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingPreferenceInternetEnabled`<sup>Optional</sup> <a name="routingPreferenceInternetEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.routingPreferenceInternetEnabled"></a>

```java
public java.lang.Object getRoutingPreferenceInternetEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.timeouts"></a>

```java
public PointToSiteVpnGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#timeouts PointToSiteVpnGateway#timeouts}

---

### PointToSiteVpnGatewayConnectionConfiguration <a name="PointToSiteVpnGatewayConnectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayConnectionConfiguration;

PointToSiteVpnGatewayConnectionConfiguration.builder()
    .name(java.lang.String)
    .vpnClientAddressPool(PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool)
//  .internetSecurityEnabled(java.lang.Boolean)
//  .internetSecurityEnabled(IResolvable)
//  .route(PointToSiteVpnGatewayConnectionConfigurationRoute)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.vpnClientAddressPool">vpnClientAddressPool</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | vpn_client_address_pool block. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.internetSecurityEnabled">internetSecurityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#internet_security_enabled PointToSiteVpnGateway#internet_security_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | route block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

##### `vpnClientAddressPool`<sup>Required</sup> <a name="vpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.vpnClientAddressPool"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool getVpnClientAddressPool();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

vpn_client_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#vpn_client_address_pool PointToSiteVpnGateway#vpn_client_address_pool}

---

##### `internetSecurityEnabled`<sup>Optional</sup> <a name="internetSecurityEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.internetSecurityEnabled"></a>

```java
public java.lang.Object getInternetSecurityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#internet_security_enabled PointToSiteVpnGateway#internet_security_enabled}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.route"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationRoute getRoute();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#route PointToSiteVpnGateway#route}

---

### PointToSiteVpnGatewayConnectionConfigurationRoute <a name="PointToSiteVpnGatewayConnectionConfigurationRoute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayConnectionConfigurationRoute;

PointToSiteVpnGatewayConnectionConfigurationRoute.builder()
    .associatedRouteTableId(java.lang.String)
//  .inboundRouteMapId(java.lang.String)
//  .outboundRouteMapId(java.lang.String)
//  .propagatedRouteTable(PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.associatedRouteTableId">associatedRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.inboundRouteMapId">inboundRouteMapId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#inbound_route_map_id PointToSiteVpnGateway#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.outboundRouteMapId">outboundRouteMapId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#outbound_route_map_id PointToSiteVpnGateway#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.propagatedRouteTable">propagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | propagated_route_table block. |

---

##### `associatedRouteTableId`<sup>Required</sup> <a name="associatedRouteTableId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.associatedRouteTableId"></a>

```java
public java.lang.String getAssociatedRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}.

---

##### `inboundRouteMapId`<sup>Optional</sup> <a name="inboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.inboundRouteMapId"></a>

```java
public java.lang.String getInboundRouteMapId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#inbound_route_map_id PointToSiteVpnGateway#inbound_route_map_id}.

---

##### `outboundRouteMapId`<sup>Optional</sup> <a name="outboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.outboundRouteMapId"></a>

```java
public java.lang.String getOutboundRouteMapId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#outbound_route_map_id PointToSiteVpnGateway#outbound_route_map_id}.

---

##### `propagatedRouteTable`<sup>Optional</sup> <a name="propagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.propagatedRouteTable"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable getPropagatedRouteTable();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#propagated_route_table PointToSiteVpnGateway#propagated_route_table}

---

### PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable <a name="PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable;

PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.builder()
    .ids(java.util.List<java.lang.String>)
//  .labels(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#ids PointToSiteVpnGateway#ids}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#labels PointToSiteVpnGateway#labels}. |

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#ids PointToSiteVpnGateway#ids}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#labels PointToSiteVpnGateway#labels}.

---

### PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool <a name="PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool;

PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.builder()
    .addressPrefixes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.property.addressPrefixes">addressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#address_prefixes PointToSiteVpnGateway#address_prefixes}. |

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.property.addressPrefixes"></a>

```java
public java.util.List<java.lang.String> getAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#address_prefixes PointToSiteVpnGateway#address_prefixes}.

---

### PointToSiteVpnGatewayTimeouts <a name="PointToSiteVpnGatewayTimeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayTimeouts;

PointToSiteVpnGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#create PointToSiteVpnGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#delete PointToSiteVpnGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#read PointToSiteVpnGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#update PointToSiteVpnGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#create PointToSiteVpnGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#delete PointToSiteVpnGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#read PointToSiteVpnGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/point_to_site_vpn_gateway#update PointToSiteVpnGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PointToSiteVpnGatewayConnectionConfigurationOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference;

new PointToSiteVpnGatewayConnectionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool">putVpnClientAddressPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetInternetSecurityEnabled">resetInternetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetRoute">resetRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoute` <a name="putRoute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute"></a>

```java
public void putRoute(PointToSiteVpnGatewayConnectionConfigurationRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---

##### `putVpnClientAddressPool` <a name="putVpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool"></a>

```java
public void putVpnClientAddressPool(PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---

##### `resetInternetSecurityEnabled` <a name="resetInternetSecurityEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetInternetSecurityEnabled"></a>

```java
public void resetInternetSecurityEnabled()
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetRoute"></a>

```java
public void resetRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference">PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPool">vpnClientAddressPool</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabledInput">internetSecurityEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.routeInput">routeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPoolInput">vpnClientAddressPoolInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabled">internetSecurityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.route"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference getRoute();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference">PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference</a>

---

##### `vpnClientAddressPool`<sup>Required</sup> <a name="vpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPool"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference getVpnClientAddressPool();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference</a>

---

##### `internetSecurityEnabledInput`<sup>Optional</sup> <a name="internetSecurityEnabledInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabledInput"></a>

```java
public java.lang.Object getInternetSecurityEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.routeInput"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationRoute getRouteInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---

##### `vpnClientAddressPoolInput`<sup>Optional</sup> <a name="vpnClientAddressPoolInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPoolInput"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool getVpnClientAddressPoolInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---

##### `internetSecurityEnabled`<sup>Required</sup> <a name="internetSecurityEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabled"></a>

```java
public java.lang.Object getInternetSecurityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internalValue"></a>

```java
public PointToSiteVpnGatewayConnectionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

---


### PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference;

new PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable">putPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetInboundRouteMapId">resetInboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetOutboundRouteMapId">resetOutboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetPropagatedRouteTable">resetPropagatedRouteTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPropagatedRouteTable` <a name="putPropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable"></a>

```java
public void putPropagatedRouteTable(PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---

##### `resetInboundRouteMapId` <a name="resetInboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetInboundRouteMapId"></a>

```java
public void resetInboundRouteMapId()
```

##### `resetOutboundRouteMapId` <a name="resetOutboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetOutboundRouteMapId"></a>

```java
public void resetOutboundRouteMapId()
```

##### `resetPropagatedRouteTable` <a name="resetPropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetPropagatedRouteTable"></a>

```java
public void resetPropagatedRouteTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTable">propagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableIdInput">associatedRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapIdInput">inboundRouteMapIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapIdInput">outboundRouteMapIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTableInput">propagatedRouteTableInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableId">associatedRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapId">inboundRouteMapId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapId">outboundRouteMapId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propagatedRouteTable`<sup>Required</sup> <a name="propagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTable"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference getPropagatedRouteTable();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference</a>

---

##### `associatedRouteTableIdInput`<sup>Optional</sup> <a name="associatedRouteTableIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableIdInput"></a>

```java
public java.lang.String getAssociatedRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `inboundRouteMapIdInput`<sup>Optional</sup> <a name="inboundRouteMapIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapIdInput"></a>

```java
public java.lang.String getInboundRouteMapIdInput();
```

- *Type:* java.lang.String

---

##### `outboundRouteMapIdInput`<sup>Optional</sup> <a name="outboundRouteMapIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapIdInput"></a>

```java
public java.lang.String getOutboundRouteMapIdInput();
```

- *Type:* java.lang.String

---

##### `propagatedRouteTableInput`<sup>Optional</sup> <a name="propagatedRouteTableInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTableInput"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable getPropagatedRouteTableInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---

##### `associatedRouteTableId`<sup>Required</sup> <a name="associatedRouteTableId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableId"></a>

```java
public java.lang.String getAssociatedRouteTableId();
```

- *Type:* java.lang.String

---

##### `inboundRouteMapId`<sup>Required</sup> <a name="inboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapId"></a>

```java
public java.lang.String getInboundRouteMapId();
```

- *Type:* java.lang.String

---

##### `outboundRouteMapId`<sup>Required</sup> <a name="outboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapId"></a>

```java
public java.lang.String getOutboundRouteMapId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.internalValue"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationRoute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---


### PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference;

new PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resetLabels"></a>

```java
public void resetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.idsInput">idsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.idsInput"></a>

```java
public java.util.List<java.lang.String> getIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.internalValue"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---


### PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference;

new PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixesInput">addressPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixes">addressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressPrefixesInput`<sup>Optional</sup> <a name="addressPrefixesInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getAddressPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixes"></a>

```java
public java.util.List<java.lang.String> getAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.internalValue"></a>

```java
public PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---


### PointToSiteVpnGatewayTimeoutsOutputReference <a name="PointToSiteVpnGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.point_to_site_vpn_gateway.PointToSiteVpnGatewayTimeoutsOutputReference;

new PointToSiteVpnGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---




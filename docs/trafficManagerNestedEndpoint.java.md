# `azurerm_traffic_manager_nested_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_traffic_manager_nested_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint).

# `trafficManagerNestedEndpoint` Submodule <a name="`trafficManagerNestedEndpoint` Submodule" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerNestedEndpoint <a name="TrafficManagerNestedEndpoint" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint azurerm_traffic_manager_nested_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpoint;

TrafficManagerNestedEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .minimumChildEndpoints(java.lang.Number)
    .name(java.lang.String)
    .profileId(java.lang.String)
    .targetResourceId(java.lang.String)
//  .customHeader(IResolvable)
//  .customHeader(java.util.List<TrafficManagerNestedEndpointCustomHeader>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .endpointLocation(java.lang.String)
//  .geoMappings(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .minimumRequiredChildEndpointsIpv4(java.lang.Number)
//  .minimumRequiredChildEndpointsIpv6(java.lang.Number)
//  .priority(java.lang.Number)
//  .subnet(IResolvable)
//  .subnet(java.util.List<TrafficManagerNestedEndpointSubnet>)
//  .timeouts(TrafficManagerNestedEndpointTimeouts)
//  .weight(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumChildEndpoints">minimumChildEndpoints</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.customHeader">customHeader</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>></code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.endpointLocation">endpointLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.geoMappings">geoMappings</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumRequiredChildEndpointsIpv4">minimumRequiredChildEndpointsIpv4</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumRequiredChildEndpointsIpv6">minimumRequiredChildEndpointsIpv6</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.subnet">subnet</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>></code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `minimumChildEndpoints`<sup>Required</sup> <a name="minimumChildEndpoints" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumChildEndpoints"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.profileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.targetResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}.

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.customHeader"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>>

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#custom_header TrafficManagerNestedEndpoint#custom_header}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}.

---

##### `endpointLocation`<sup>Optional</sup> <a name="endpointLocation" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.endpointLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}.

---

##### `geoMappings`<sup>Optional</sup> <a name="geoMappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.geoMappings"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumRequiredChildEndpointsIpv4`<sup>Optional</sup> <a name="minimumRequiredChildEndpointsIpv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumRequiredChildEndpointsIpv4"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}.

---

##### `minimumRequiredChildEndpointsIpv6`<sup>Optional</sup> <a name="minimumRequiredChildEndpointsIpv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.minimumRequiredChildEndpointsIpv6"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.subnet"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#subnet TrafficManagerNestedEndpoint#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#timeouts TrafficManagerNestedEndpoint#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.weight"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader">putCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetCustomHeader">resetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEndpointLocation">resetEndpointLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetGeoMappings">resetGeoMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv4">resetMinimumRequiredChildEndpointsIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv6">resetMinimumRequiredChildEndpointsIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCustomHeader` <a name="putCustomHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader"></a>

```java
public void putCustomHeader(IResolvable OR java.util.List<TrafficManagerNestedEndpointCustomHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>>

---

##### `putSubnet` <a name="putSubnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet"></a>

```java
public void putSubnet(IResolvable OR java.util.List<TrafficManagerNestedEndpointSubnet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts"></a>

```java
public void putTimeouts(TrafficManagerNestedEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

---

##### `resetCustomHeader` <a name="resetCustomHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetCustomHeader"></a>

```java
public void resetCustomHeader()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEndpointLocation` <a name="resetEndpointLocation" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEndpointLocation"></a>

```java
public void resetEndpointLocation()
```

##### `resetGeoMappings` <a name="resetGeoMappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetGeoMappings"></a>

```java
public void resetGeoMappings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetMinimumRequiredChildEndpointsIpv4` <a name="resetMinimumRequiredChildEndpointsIpv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv4"></a>

```java
public void resetMinimumRequiredChildEndpointsIpv4()
```

##### `resetMinimumRequiredChildEndpointsIpv6` <a name="resetMinimumRequiredChildEndpointsIpv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv6"></a>

```java
public void resetMinimumRequiredChildEndpointsIpv6()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetSubnet"></a>

```java
public void resetSubnet()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetWeight"></a>

```java
public void resetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpoint;

TrafficManagerNestedEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpoint;

TrafficManagerNestedEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpoint;

TrafficManagerNestedEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeader">customHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList">TrafficManagerNestedEndpointCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList">TrafficManagerNestedEndpointSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference">TrafficManagerNestedEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeaderInput">customHeaderInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocationInput">endpointLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappingsInput">geoMappingsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpointsInput">minimumChildEndpointsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4Input">minimumRequiredChildEndpointsIpv4Input</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6Input">minimumRequiredChildEndpointsIpv6Input</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnetInput">subnetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocation">endpointLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappings">geoMappings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpoints">minimumChildEndpoints</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4">minimumRequiredChildEndpointsIpv4</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6">minimumRequiredChildEndpointsIpv6</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customHeader`<sup>Required</sup> <a name="customHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeader"></a>

```java
public TrafficManagerNestedEndpointCustomHeaderList getCustomHeader();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList">TrafficManagerNestedEndpointCustomHeaderList</a>

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnet"></a>

```java
public TrafficManagerNestedEndpointSubnetList getSubnet();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList">TrafficManagerNestedEndpointSubnetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeouts"></a>

```java
public TrafficManagerNestedEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference">TrafficManagerNestedEndpointTimeoutsOutputReference</a>

---

##### `customHeaderInput`<sup>Optional</sup> <a name="customHeaderInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeaderInput"></a>

```java
public java.lang.Object getCustomHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointLocationInput`<sup>Optional</sup> <a name="endpointLocationInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocationInput"></a>

```java
public java.lang.String getEndpointLocationInput();
```

- *Type:* java.lang.String

---

##### `geoMappingsInput`<sup>Optional</sup> <a name="geoMappingsInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappingsInput"></a>

```java
public java.util.List<java.lang.String> getGeoMappingsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `minimumChildEndpointsInput`<sup>Optional</sup> <a name="minimumChildEndpointsInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpointsInput"></a>

```java
public java.lang.Number getMinimumChildEndpointsInput();
```

- *Type:* java.lang.Number

---

##### `minimumRequiredChildEndpointsIpv4Input`<sup>Optional</sup> <a name="minimumRequiredChildEndpointsIpv4Input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4Input"></a>

```java
public java.lang.Number getMinimumRequiredChildEndpointsIpv4Input();
```

- *Type:* java.lang.Number

---

##### `minimumRequiredChildEndpointsIpv6Input`<sup>Optional</sup> <a name="minimumRequiredChildEndpointsIpv6Input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6Input"></a>

```java
public java.lang.Number getMinimumRequiredChildEndpointsIpv6Input();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnetInput"></a>

```java
public java.lang.Object getSubnetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>>

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceIdInput"></a>

```java
public java.lang.String getTargetResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointLocation`<sup>Required</sup> <a name="endpointLocation" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocation"></a>

```java
public java.lang.String getEndpointLocation();
```

- *Type:* java.lang.String

---

##### `geoMappings`<sup>Required</sup> <a name="geoMappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappings"></a>

```java
public java.util.List<java.lang.String> getGeoMappings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minimumChildEndpoints`<sup>Required</sup> <a name="minimumChildEndpoints" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpoints"></a>

```java
public java.lang.Number getMinimumChildEndpoints();
```

- *Type:* java.lang.Number

---

##### `minimumRequiredChildEndpointsIpv4`<sup>Required</sup> <a name="minimumRequiredChildEndpointsIpv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4"></a>

```java
public java.lang.Number getMinimumRequiredChildEndpointsIpv4();
```

- *Type:* java.lang.Number

---

##### `minimumRequiredChildEndpointsIpv6`<sup>Required</sup> <a name="minimumRequiredChildEndpointsIpv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6"></a>

```java
public java.lang.Number getMinimumRequiredChildEndpointsIpv6();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerNestedEndpointConfig <a name="TrafficManagerNestedEndpointConfig" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpointConfig;

TrafficManagerNestedEndpointConfig.builder()
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
    .minimumChildEndpoints(java.lang.Number)
    .name(java.lang.String)
    .profileId(java.lang.String)
    .targetResourceId(java.lang.String)
//  .customHeader(IResolvable)
//  .customHeader(java.util.List<TrafficManagerNestedEndpointCustomHeader>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .endpointLocation(java.lang.String)
//  .geoMappings(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .minimumRequiredChildEndpointsIpv4(java.lang.Number)
//  .minimumRequiredChildEndpointsIpv6(java.lang.Number)
//  .priority(java.lang.Number)
//  .subnet(IResolvable)
//  .subnet(java.util.List<TrafficManagerNestedEndpointSubnet>)
//  .timeouts(TrafficManagerNestedEndpointTimeouts)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumChildEndpoints">minimumChildEndpoints</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.customHeader">customHeader</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>></code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.endpointLocation">endpointLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.geoMappings">geoMappings</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv4">minimumRequiredChildEndpointsIpv4</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv6">minimumRequiredChildEndpointsIpv6</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.subnet">subnet</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>></code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `minimumChildEndpoints`<sup>Required</sup> <a name="minimumChildEndpoints" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumChildEndpoints"></a>

```java
public java.lang.Number getMinimumChildEndpoints();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}.

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.customHeader"></a>

```java
public java.lang.Object getCustomHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>>

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#custom_header TrafficManagerNestedEndpoint#custom_header}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}.

---

##### `endpointLocation`<sup>Optional</sup> <a name="endpointLocation" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.endpointLocation"></a>

```java
public java.lang.String getEndpointLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}.

---

##### `geoMappings`<sup>Optional</sup> <a name="geoMappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.geoMappings"></a>

```java
public java.util.List<java.lang.String> getGeoMappings();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumRequiredChildEndpointsIpv4`<sup>Optional</sup> <a name="minimumRequiredChildEndpointsIpv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv4"></a>

```java
public java.lang.Number getMinimumRequiredChildEndpointsIpv4();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}.

---

##### `minimumRequiredChildEndpointsIpv6`<sup>Optional</sup> <a name="minimumRequiredChildEndpointsIpv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv6"></a>

```java
public java.lang.Number getMinimumRequiredChildEndpointsIpv6();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.subnet"></a>

```java
public java.lang.Object getSubnet();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#subnet TrafficManagerNestedEndpoint#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.timeouts"></a>

```java
public TrafficManagerNestedEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#timeouts TrafficManagerNestedEndpoint#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}.

---

### TrafficManagerNestedEndpointCustomHeader <a name="TrafficManagerNestedEndpointCustomHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpointCustomHeader;

TrafficManagerNestedEndpointCustomHeader.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#value TrafficManagerNestedEndpoint#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#value TrafficManagerNestedEndpoint#value}.

---

### TrafficManagerNestedEndpointSubnet <a name="TrafficManagerNestedEndpointSubnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpointSubnet;

TrafficManagerNestedEndpointSubnet.builder()
    .first(java.lang.String)
//  .last(java.lang.String)
//  .scope(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.first">first</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#first TrafficManagerNestedEndpoint#first}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.last">last</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#last TrafficManagerNestedEndpoint#last}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.scope">scope</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#scope TrafficManagerNestedEndpoint#scope}. |

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.first"></a>

```java
public java.lang.String getFirst();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#first TrafficManagerNestedEndpoint#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.last"></a>

```java
public java.lang.String getLast();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#last TrafficManagerNestedEndpoint#last}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.scope"></a>

```java
public java.lang.Number getScope();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#scope TrafficManagerNestedEndpoint#scope}.

---

### TrafficManagerNestedEndpointTimeouts <a name="TrafficManagerNestedEndpointTimeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpointTimeouts;

TrafficManagerNestedEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#create TrafficManagerNestedEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#delete TrafficManagerNestedEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#read TrafficManagerNestedEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#update TrafficManagerNestedEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#create TrafficManagerNestedEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#delete TrafficManagerNestedEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#read TrafficManagerNestedEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_nested_endpoint#update TrafficManagerNestedEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerNestedEndpointCustomHeaderList <a name="TrafficManagerNestedEndpointCustomHeaderList" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpointCustomHeaderList;

new TrafficManagerNestedEndpointCustomHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get"></a>

```java
public TrafficManagerNestedEndpointCustomHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>>

---


### TrafficManagerNestedEndpointCustomHeaderOutputReference <a name="TrafficManagerNestedEndpointCustomHeaderOutputReference" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference;

new TrafficManagerNestedEndpointCustomHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>

---


### TrafficManagerNestedEndpointSubnetList <a name="TrafficManagerNestedEndpointSubnetList" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpointSubnetList;

new TrafficManagerNestedEndpointSubnetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get"></a>

```java
public TrafficManagerNestedEndpointSubnetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>>

---


### TrafficManagerNestedEndpointSubnetOutputReference <a name="TrafficManagerNestedEndpointSubnetOutputReference" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpointSubnetOutputReference;

new TrafficManagerNestedEndpointSubnetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLast` <a name="resetLast" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetLast"></a>

```java
public void resetLast()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.firstInput">firstInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.lastInput">lastInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.first">first</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.last">last</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scope">scope</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.firstInput"></a>

```java
public java.lang.String getFirstInput();
```

- *Type:* java.lang.String

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.lastInput"></a>

```java
public java.lang.String getLastInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scopeInput"></a>

```java
public java.lang.Number getScopeInput();
```

- *Type:* java.lang.Number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.first"></a>

```java
public java.lang.String getFirst();
```

- *Type:* java.lang.String

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.last"></a>

```java
public java.lang.String getLast();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scope"></a>

```java
public java.lang.Number getScope();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>

---


### TrafficManagerNestedEndpointTimeoutsOutputReference <a name="TrafficManagerNestedEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_nested_endpoint.TrafficManagerNestedEndpointTimeoutsOutputReference;

new TrafficManagerNestedEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

---




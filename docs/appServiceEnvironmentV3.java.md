# `azurerm_app_service_environment_v3`

Refer to the Terraform Registory for docs: [`azurerm_app_service_environment_v3`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3).

# `appServiceEnvironmentV3` Submodule <a name="`appServiceEnvironmentV3` Submodule" id="@cdktf/provider-azurerm.appServiceEnvironmentV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceEnvironmentV3 <a name="AppServiceEnvironmentV3" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3 azurerm_app_service_environment_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3;

AppServiceEnvironmentV3.Builder.create(Construct scope, java.lang.String id)
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
    .subnetId(java.lang.String)
//  .allowNewPrivateEndpointConnections(java.lang.Boolean)
//  .allowNewPrivateEndpointConnections(IResolvable)
//  .clusterSetting(IResolvable)
//  .clusterSetting(java.util.List<AppServiceEnvironmentV3ClusterSetting>)
//  .dedicatedHostCount(java.lang.Number)
//  .id(java.lang.String)
//  .internalLoadBalancingMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AppServiceEnvironmentV3Timeouts)
//  .zoneRedundant(java.lang.Boolean)
//  .zoneRedundant(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#resource_group_name AppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#subnet_id AppServiceEnvironmentV3#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.allowNewPrivateEndpointConnections">allowNewPrivateEndpointConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#allow_new_private_endpoint_connections AppServiceEnvironmentV3#allow_new_private_endpoint_connections}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.clusterSetting">clusterSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>></code> | cluster_setting block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.dedicatedHostCount">dedicatedHostCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#dedicated_host_count AppServiceEnvironmentV3#dedicated_host_count}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#id AppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.internalLoadBalancingMode">internalLoadBalancingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#internal_load_balancing_mode AppServiceEnvironmentV3#internal_load_balancing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#tags AppServiceEnvironmentV3#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#zone_redundant AppServiceEnvironmentV3#zone_redundant}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#resource_group_name AppServiceEnvironmentV3#resource_group_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#subnet_id AppServiceEnvironmentV3#subnet_id}.

---

##### `allowNewPrivateEndpointConnections`<sup>Optional</sup> <a name="allowNewPrivateEndpointConnections" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.allowNewPrivateEndpointConnections"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#allow_new_private_endpoint_connections AppServiceEnvironmentV3#allow_new_private_endpoint_connections}.

---

##### `clusterSetting`<sup>Optional</sup> <a name="clusterSetting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.clusterSetting"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>>

cluster_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#cluster_setting AppServiceEnvironmentV3#cluster_setting}

---

##### `dedicatedHostCount`<sup>Optional</sup> <a name="dedicatedHostCount" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.dedicatedHostCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#dedicated_host_count AppServiceEnvironmentV3#dedicated_host_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#id AppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalLoadBalancingMode`<sup>Optional</sup> <a name="internalLoadBalancingMode" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.internalLoadBalancingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#internal_load_balancing_mode AppServiceEnvironmentV3#internal_load_balancing_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#tags AppServiceEnvironmentV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#timeouts AppServiceEnvironmentV3#timeouts}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.zoneRedundant"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#zone_redundant AppServiceEnvironmentV3#zone_redundant}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putClusterSetting">putClusterSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetAllowNewPrivateEndpointConnections">resetAllowNewPrivateEndpointConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetClusterSetting">resetClusterSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetDedicatedHostCount">resetDedicatedHostCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetInternalLoadBalancingMode">resetInternalLoadBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetZoneRedundant">resetZoneRedundant</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putClusterSetting` <a name="putClusterSetting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putClusterSetting"></a>

```java
public void putClusterSetting(IResolvable OR java.util.List<AppServiceEnvironmentV3ClusterSetting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putClusterSetting.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putTimeouts"></a>

```java
public void putTimeouts(AppServiceEnvironmentV3Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>

---

##### `resetAllowNewPrivateEndpointConnections` <a name="resetAllowNewPrivateEndpointConnections" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetAllowNewPrivateEndpointConnections"></a>

```java
public void resetAllowNewPrivateEndpointConnections()
```

##### `resetClusterSetting` <a name="resetClusterSetting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetClusterSetting"></a>

```java
public void resetClusterSetting()
```

##### `resetDedicatedHostCount` <a name="resetDedicatedHostCount" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetDedicatedHostCount"></a>

```java
public void resetDedicatedHostCount()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetId"></a>

```java
public void resetId()
```

##### `resetInternalLoadBalancingMode` <a name="resetInternalLoadBalancingMode" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetInternalLoadBalancingMode"></a>

```java
public void resetInternalLoadBalancingMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZoneRedundant` <a name="resetZoneRedundant" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetZoneRedundant"></a>

```java
public void resetZoneRedundant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3;

AppServiceEnvironmentV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3;

AppServiceEnvironmentV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3;

AppServiceEnvironmentV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.clusterSetting">clusterSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList">AppServiceEnvironmentV3ClusterSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dnsSuffix">dnsSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.externalInboundIpAddresses">externalInboundIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.inboundNetworkDependencies">inboundNetworkDependencies</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList">AppServiceEnvironmentV3InboundNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalInboundIpAddresses">internalInboundIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.ipSslAddressCount">ipSslAddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.linuxOutboundIpAddresses">linuxOutboundIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.pricingTier">pricingTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference">AppServiceEnvironmentV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.windowsOutboundIpAddresses">windowsOutboundIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.allowNewPrivateEndpointConnectionsInput">allowNewPrivateEndpointConnectionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.clusterSettingInput">clusterSettingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dedicatedHostCountInput">dedicatedHostCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalLoadBalancingModeInput">internalLoadBalancingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.zoneRedundantInput">zoneRedundantInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections">allowNewPrivateEndpointConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dedicatedHostCount">dedicatedHostCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalLoadBalancingMode">internalLoadBalancingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterSetting`<sup>Required</sup> <a name="clusterSetting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.clusterSetting"></a>

```java
public AppServiceEnvironmentV3ClusterSettingList getClusterSetting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList">AppServiceEnvironmentV3ClusterSettingList</a>

---

##### `dnsSuffix`<sup>Required</sup> <a name="dnsSuffix" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dnsSuffix"></a>

```java
public java.lang.String getDnsSuffix();
```

- *Type:* java.lang.String

---

##### `externalInboundIpAddresses`<sup>Required</sup> <a name="externalInboundIpAddresses" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.externalInboundIpAddresses"></a>

```java
public java.util.List<java.lang.String> getExternalInboundIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inboundNetworkDependencies`<sup>Required</sup> <a name="inboundNetworkDependencies" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.inboundNetworkDependencies"></a>

```java
public AppServiceEnvironmentV3InboundNetworkDependenciesList getInboundNetworkDependencies();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList">AppServiceEnvironmentV3InboundNetworkDependenciesList</a>

---

##### `internalInboundIpAddresses`<sup>Required</sup> <a name="internalInboundIpAddresses" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalInboundIpAddresses"></a>

```java
public java.util.List<java.lang.String> getInternalInboundIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipSslAddressCount`<sup>Required</sup> <a name="ipSslAddressCount" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.ipSslAddressCount"></a>

```java
public java.lang.Number getIpSslAddressCount();
```

- *Type:* java.lang.Number

---

##### `linuxOutboundIpAddresses`<sup>Required</sup> <a name="linuxOutboundIpAddresses" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.linuxOutboundIpAddresses"></a>

```java
public java.util.List<java.lang.String> getLinuxOutboundIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `pricingTier`<sup>Required</sup> <a name="pricingTier" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.pricingTier"></a>

```java
public java.lang.String getPricingTier();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.timeouts"></a>

```java
public AppServiceEnvironmentV3TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference">AppServiceEnvironmentV3TimeoutsOutputReference</a>

---

##### `windowsOutboundIpAddresses`<sup>Required</sup> <a name="windowsOutboundIpAddresses" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.windowsOutboundIpAddresses"></a>

```java
public java.util.List<java.lang.String> getWindowsOutboundIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowNewPrivateEndpointConnectionsInput`<sup>Optional</sup> <a name="allowNewPrivateEndpointConnectionsInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.allowNewPrivateEndpointConnectionsInput"></a>

```java
public java.lang.Object getAllowNewPrivateEndpointConnectionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterSettingInput`<sup>Optional</sup> <a name="clusterSettingInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.clusterSettingInput"></a>

```java
public java.lang.Object getClusterSettingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>>

---

##### `dedicatedHostCountInput`<sup>Optional</sup> <a name="dedicatedHostCountInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dedicatedHostCountInput"></a>

```java
public java.lang.Number getDedicatedHostCountInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internalLoadBalancingModeInput`<sup>Optional</sup> <a name="internalLoadBalancingModeInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalLoadBalancingModeInput"></a>

```java
public java.lang.String getInternalLoadBalancingModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>

---

##### `zoneRedundantInput`<sup>Optional</sup> <a name="zoneRedundantInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.zoneRedundantInput"></a>

```java
public java.lang.Object getZoneRedundantInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowNewPrivateEndpointConnections`<sup>Required</sup> <a name="allowNewPrivateEndpointConnections" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections"></a>

```java
public java.lang.Object getAllowNewPrivateEndpointConnections();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dedicatedHostCount`<sup>Required</sup> <a name="dedicatedHostCount" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dedicatedHostCount"></a>

```java
public java.lang.Number getDedicatedHostCount();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalLoadBalancingMode`<sup>Required</sup> <a name="internalLoadBalancingMode" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalLoadBalancingMode"></a>

```java
public java.lang.String getInternalLoadBalancingMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.zoneRedundant"></a>

```java
public java.lang.Object getZoneRedundant();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceEnvironmentV3ClusterSetting <a name="AppServiceEnvironmentV3ClusterSetting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3ClusterSetting;

AppServiceEnvironmentV3ClusterSetting.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#value AppServiceEnvironmentV3#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#value AppServiceEnvironmentV3#value}.

---

### AppServiceEnvironmentV3Config <a name="AppServiceEnvironmentV3Config" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3Config;

AppServiceEnvironmentV3Config.builder()
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
    .subnetId(java.lang.String)
//  .allowNewPrivateEndpointConnections(java.lang.Boolean)
//  .allowNewPrivateEndpointConnections(IResolvable)
//  .clusterSetting(IResolvable)
//  .clusterSetting(java.util.List<AppServiceEnvironmentV3ClusterSetting>)
//  .dedicatedHostCount(java.lang.Number)
//  .id(java.lang.String)
//  .internalLoadBalancingMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AppServiceEnvironmentV3Timeouts)
//  .zoneRedundant(java.lang.Boolean)
//  .zoneRedundant(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#resource_group_name AppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#subnet_id AppServiceEnvironmentV3#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.allowNewPrivateEndpointConnections">allowNewPrivateEndpointConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#allow_new_private_endpoint_connections AppServiceEnvironmentV3#allow_new_private_endpoint_connections}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.clusterSetting">clusterSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>></code> | cluster_setting block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.dedicatedHostCount">dedicatedHostCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#dedicated_host_count AppServiceEnvironmentV3#dedicated_host_count}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#id AppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.internalLoadBalancingMode">internalLoadBalancingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#internal_load_balancing_mode AppServiceEnvironmentV3#internal_load_balancing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#tags AppServiceEnvironmentV3#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#zone_redundant AppServiceEnvironmentV3#zone_redundant}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#resource_group_name AppServiceEnvironmentV3#resource_group_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#subnet_id AppServiceEnvironmentV3#subnet_id}.

---

##### `allowNewPrivateEndpointConnections`<sup>Optional</sup> <a name="allowNewPrivateEndpointConnections" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.allowNewPrivateEndpointConnections"></a>

```java
public java.lang.Object getAllowNewPrivateEndpointConnections();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#allow_new_private_endpoint_connections AppServiceEnvironmentV3#allow_new_private_endpoint_connections}.

---

##### `clusterSetting`<sup>Optional</sup> <a name="clusterSetting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.clusterSetting"></a>

```java
public java.lang.Object getClusterSetting();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>>

cluster_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#cluster_setting AppServiceEnvironmentV3#cluster_setting}

---

##### `dedicatedHostCount`<sup>Optional</sup> <a name="dedicatedHostCount" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.dedicatedHostCount"></a>

```java
public java.lang.Number getDedicatedHostCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#dedicated_host_count AppServiceEnvironmentV3#dedicated_host_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#id AppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalLoadBalancingMode`<sup>Optional</sup> <a name="internalLoadBalancingMode" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.internalLoadBalancingMode"></a>

```java
public java.lang.String getInternalLoadBalancingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#internal_load_balancing_mode AppServiceEnvironmentV3#internal_load_balancing_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#tags AppServiceEnvironmentV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.timeouts"></a>

```java
public AppServiceEnvironmentV3Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#timeouts AppServiceEnvironmentV3#timeouts}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.zoneRedundant"></a>

```java
public java.lang.Object getZoneRedundant();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#zone_redundant AppServiceEnvironmentV3#zone_redundant}.

---

### AppServiceEnvironmentV3InboundNetworkDependencies <a name="AppServiceEnvironmentV3InboundNetworkDependencies" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependencies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3InboundNetworkDependencies;

AppServiceEnvironmentV3InboundNetworkDependencies.builder()
    .build();
```


### AppServiceEnvironmentV3Timeouts <a name="AppServiceEnvironmentV3Timeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3Timeouts;

AppServiceEnvironmentV3Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#create AppServiceEnvironmentV3#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#delete AppServiceEnvironmentV3#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#read AppServiceEnvironmentV3#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#update AppServiceEnvironmentV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#create AppServiceEnvironmentV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#delete AppServiceEnvironmentV3#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#read AppServiceEnvironmentV3#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/app_service_environment_v3#update AppServiceEnvironmentV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceEnvironmentV3ClusterSettingList <a name="AppServiceEnvironmentV3ClusterSettingList" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3ClusterSettingList;

new AppServiceEnvironmentV3ClusterSettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.get"></a>

```java
public AppServiceEnvironmentV3ClusterSettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>>

---


### AppServiceEnvironmentV3ClusterSettingOutputReference <a name="AppServiceEnvironmentV3ClusterSettingOutputReference" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3ClusterSettingOutputReference;

new AppServiceEnvironmentV3ClusterSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>

---


### AppServiceEnvironmentV3InboundNetworkDependenciesList <a name="AppServiceEnvironmentV3InboundNetworkDependenciesList" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3InboundNetworkDependenciesList;

new AppServiceEnvironmentV3InboundNetworkDependenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.get"></a>

```java
public AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference <a name="AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference;

new AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependencies">AppServiceEnvironmentV3InboundNetworkDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue"></a>

```java
public AppServiceEnvironmentV3InboundNetworkDependencies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependencies">AppServiceEnvironmentV3InboundNetworkDependencies</a>

---


### AppServiceEnvironmentV3TimeoutsOutputReference <a name="AppServiceEnvironmentV3TimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_environment_v3.AppServiceEnvironmentV3TimeoutsOutputReference;

new AppServiceEnvironmentV3TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>

---




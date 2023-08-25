# `azurerm_traffic_manager_profile`

Refer to the Terraform Registory for docs: [`azurerm_traffic_manager_profile`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile).

# `trafficManagerProfile` Submodule <a name="`trafficManagerProfile` Submodule" id="@cdktf/provider-azurerm.trafficManagerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerProfile <a name="TrafficManagerProfile" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile azurerm_traffic_manager_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfile;

TrafficManagerProfile.Builder.create(Construct scope, java.lang.String id)
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
    .dnsConfig(TrafficManagerProfileDnsConfig)
    .monitorConfig(TrafficManagerProfileMonitorConfig)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .trafficRoutingMethod(java.lang.String)
//  .id(java.lang.String)
//  .maxReturn(java.lang.Number)
//  .profileStatus(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TrafficManagerProfileTimeouts)
//  .trafficViewEnabled(java.lang.Boolean)
//  .trafficViewEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.monitorConfig">monitorConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a></code> | monitor_config block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#resource_group_name TrafficManagerProfile#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.trafficRoutingMethod">trafficRoutingMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#traffic_routing_method TrafficManagerProfile#traffic_routing_method}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#id TrafficManagerProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.maxReturn">maxReturn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#max_return TrafficManagerProfile#max_return}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.profileStatus">profileStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#profile_status TrafficManagerProfile#profile_status}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#tags TrafficManagerProfile#tags}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.trafficViewEnabled">trafficViewEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#traffic_view_enabled TrafficManagerProfile#traffic_view_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.dnsConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#dns_config TrafficManagerProfile#dns_config}

---

##### `monitorConfig`<sup>Required</sup> <a name="monitorConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.monitorConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a>

monitor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#monitor_config TrafficManagerProfile#monitor_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#resource_group_name TrafficManagerProfile#resource_group_name}.

---

##### `trafficRoutingMethod`<sup>Required</sup> <a name="trafficRoutingMethod" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.trafficRoutingMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#traffic_routing_method TrafficManagerProfile#traffic_routing_method}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#id TrafficManagerProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxReturn`<sup>Optional</sup> <a name="maxReturn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.maxReturn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#max_return TrafficManagerProfile#max_return}.

---

##### `profileStatus`<sup>Optional</sup> <a name="profileStatus" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.profileStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#profile_status TrafficManagerProfile#profile_status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#tags TrafficManagerProfile#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#timeouts TrafficManagerProfile#timeouts}

---

##### `trafficViewEnabled`<sup>Optional</sup> <a name="trafficViewEnabled" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.trafficViewEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#traffic_view_enabled TrafficManagerProfile#traffic_view_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putDnsConfig">putDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putMonitorConfig">putMonitorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetMaxReturn">resetMaxReturn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetProfileStatus">resetProfileStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTrafficViewEnabled">resetTrafficViewEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDnsConfig` <a name="putDnsConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putDnsConfig"></a>

```java
public void putDnsConfig(TrafficManagerProfileDnsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a>

---

##### `putMonitorConfig` <a name="putMonitorConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putMonitorConfig"></a>

```java
public void putMonitorConfig(TrafficManagerProfileMonitorConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putMonitorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putTimeouts"></a>

```java
public void putTimeouts(TrafficManagerProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetId"></a>

```java
public void resetId()
```

##### `resetMaxReturn` <a name="resetMaxReturn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetMaxReturn"></a>

```java
public void resetMaxReturn()
```

##### `resetProfileStatus` <a name="resetProfileStatus" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetProfileStatus"></a>

```java
public void resetProfileStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrafficViewEnabled` <a name="resetTrafficViewEnabled" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTrafficViewEnabled"></a>

```java
public void resetTrafficViewEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfile;

TrafficManagerProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfile;

TrafficManagerProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfile;

TrafficManagerProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference">TrafficManagerProfileDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.monitorConfig">monitorConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference">TrafficManagerProfileMonitorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference">TrafficManagerProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dnsConfigInput">dnsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.maxReturnInput">maxReturnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.monitorConfigInput">monitorConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.profileStatusInput">profileStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficRoutingMethodInput">trafficRoutingMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficViewEnabledInput">trafficViewEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.maxReturn">maxReturn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.profileStatus">profileStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficRoutingMethod">trafficRoutingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficViewEnabled">trafficViewEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dnsConfig"></a>

```java
public TrafficManagerProfileDnsConfigOutputReference getDnsConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference">TrafficManagerProfileDnsConfigOutputReference</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `monitorConfig`<sup>Required</sup> <a name="monitorConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.monitorConfig"></a>

```java
public TrafficManagerProfileMonitorConfigOutputReference getMonitorConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference">TrafficManagerProfileMonitorConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.timeouts"></a>

```java
public TrafficManagerProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference">TrafficManagerProfileTimeoutsOutputReference</a>

---

##### `dnsConfigInput`<sup>Optional</sup> <a name="dnsConfigInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dnsConfigInput"></a>

```java
public TrafficManagerProfileDnsConfig getDnsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxReturnInput`<sup>Optional</sup> <a name="maxReturnInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.maxReturnInput"></a>

```java
public java.lang.Number getMaxReturnInput();
```

- *Type:* java.lang.Number

---

##### `monitorConfigInput`<sup>Optional</sup> <a name="monitorConfigInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.monitorConfigInput"></a>

```java
public TrafficManagerProfileMonitorConfig getMonitorConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `profileStatusInput`<sup>Optional</sup> <a name="profileStatusInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.profileStatusInput"></a>

```java
public java.lang.String getProfileStatusInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a>

---

##### `trafficRoutingMethodInput`<sup>Optional</sup> <a name="trafficRoutingMethodInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficRoutingMethodInput"></a>

```java
public java.lang.String getTrafficRoutingMethodInput();
```

- *Type:* java.lang.String

---

##### `trafficViewEnabledInput`<sup>Optional</sup> <a name="trafficViewEnabledInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficViewEnabledInput"></a>

```java
public java.lang.Object getTrafficViewEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxReturn`<sup>Required</sup> <a name="maxReturn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.maxReturn"></a>

```java
public java.lang.Number getMaxReturn();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileStatus`<sup>Required</sup> <a name="profileStatus" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.profileStatus"></a>

```java
public java.lang.String getProfileStatus();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `trafficRoutingMethod`<sup>Required</sup> <a name="trafficRoutingMethod" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficRoutingMethod"></a>

```java
public java.lang.String getTrafficRoutingMethod();
```

- *Type:* java.lang.String

---

##### `trafficViewEnabled`<sup>Required</sup> <a name="trafficViewEnabled" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficViewEnabled"></a>

```java
public java.lang.Object getTrafficViewEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerProfileConfig <a name="TrafficManagerProfileConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfileConfig;

TrafficManagerProfileConfig.builder()
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
    .dnsConfig(TrafficManagerProfileDnsConfig)
    .monitorConfig(TrafficManagerProfileMonitorConfig)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .trafficRoutingMethod(java.lang.String)
//  .id(java.lang.String)
//  .maxReturn(java.lang.Number)
//  .profileStatus(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TrafficManagerProfileTimeouts)
//  .trafficViewEnabled(java.lang.Boolean)
//  .trafficViewEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.monitorConfig">monitorConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a></code> | monitor_config block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#resource_group_name TrafficManagerProfile#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.trafficRoutingMethod">trafficRoutingMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#traffic_routing_method TrafficManagerProfile#traffic_routing_method}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#id TrafficManagerProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.maxReturn">maxReturn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#max_return TrafficManagerProfile#max_return}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.profileStatus">profileStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#profile_status TrafficManagerProfile#profile_status}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#tags TrafficManagerProfile#tags}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.trafficViewEnabled">trafficViewEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#traffic_view_enabled TrafficManagerProfile#traffic_view_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.dnsConfig"></a>

```java
public TrafficManagerProfileDnsConfig getDnsConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#dns_config TrafficManagerProfile#dns_config}

---

##### `monitorConfig`<sup>Required</sup> <a name="monitorConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.monitorConfig"></a>

```java
public TrafficManagerProfileMonitorConfig getMonitorConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a>

monitor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#monitor_config TrafficManagerProfile#monitor_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#resource_group_name TrafficManagerProfile#resource_group_name}.

---

##### `trafficRoutingMethod`<sup>Required</sup> <a name="trafficRoutingMethod" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.trafficRoutingMethod"></a>

```java
public java.lang.String getTrafficRoutingMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#traffic_routing_method TrafficManagerProfile#traffic_routing_method}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#id TrafficManagerProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxReturn`<sup>Optional</sup> <a name="maxReturn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.maxReturn"></a>

```java
public java.lang.Number getMaxReturn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#max_return TrafficManagerProfile#max_return}.

---

##### `profileStatus`<sup>Optional</sup> <a name="profileStatus" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.profileStatus"></a>

```java
public java.lang.String getProfileStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#profile_status TrafficManagerProfile#profile_status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#tags TrafficManagerProfile#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.timeouts"></a>

```java
public TrafficManagerProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#timeouts TrafficManagerProfile#timeouts}

---

##### `trafficViewEnabled`<sup>Optional</sup> <a name="trafficViewEnabled" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.trafficViewEnabled"></a>

```java
public java.lang.Object getTrafficViewEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#traffic_view_enabled TrafficManagerProfile#traffic_view_enabled}.

---

### TrafficManagerProfileDnsConfig <a name="TrafficManagerProfileDnsConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfileDnsConfig;

TrafficManagerProfileDnsConfig.builder()
    .relativeName(java.lang.String)
    .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig.property.relativeName">relativeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#relative_name TrafficManagerProfile#relative_name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#ttl TrafficManagerProfile#ttl}. |

---

##### `relativeName`<sup>Required</sup> <a name="relativeName" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig.property.relativeName"></a>

```java
public java.lang.String getRelativeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#relative_name TrafficManagerProfile#relative_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#ttl TrafficManagerProfile#ttl}.

---

### TrafficManagerProfileMonitorConfig <a name="TrafficManagerProfileMonitorConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfileMonitorConfig;

TrafficManagerProfileMonitorConfig.builder()
    .port(java.lang.Number)
    .protocol(java.lang.String)
//  .customHeader(IResolvable)
//  .customHeader(java.util.List<TrafficManagerProfileMonitorConfigCustomHeader>)
//  .expectedStatusCodeRanges(java.util.List<java.lang.String>)
//  .intervalInSeconds(java.lang.Number)
//  .path(java.lang.String)
//  .timeoutInSeconds(java.lang.Number)
//  .toleratedNumberOfFailures(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#port TrafficManagerProfile#port}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#protocol TrafficManagerProfile#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.customHeader">customHeader</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader">TrafficManagerProfileMonitorConfigCustomHeader</a>></code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.expectedStatusCodeRanges">expectedStatusCodeRanges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#expected_status_code_ranges TrafficManagerProfile#expected_status_code_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#interval_in_seconds TrafficManagerProfile#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#path TrafficManagerProfile#path}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#timeout_in_seconds TrafficManagerProfile#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.toleratedNumberOfFailures">toleratedNumberOfFailures</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#tolerated_number_of_failures TrafficManagerProfile#tolerated_number_of_failures}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#port TrafficManagerProfile#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#protocol TrafficManagerProfile#protocol}.

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.customHeader"></a>

```java
public java.lang.Object getCustomHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader">TrafficManagerProfileMonitorConfigCustomHeader</a>>

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#custom_header TrafficManagerProfile#custom_header}

---

##### `expectedStatusCodeRanges`<sup>Optional</sup> <a name="expectedStatusCodeRanges" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.expectedStatusCodeRanges"></a>

```java
public java.util.List<java.lang.String> getExpectedStatusCodeRanges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#expected_status_code_ranges TrafficManagerProfile#expected_status_code_ranges}.

---

##### `intervalInSeconds`<sup>Optional</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#interval_in_seconds TrafficManagerProfile#interval_in_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#path TrafficManagerProfile#path}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#timeout_in_seconds TrafficManagerProfile#timeout_in_seconds}.

---

##### `toleratedNumberOfFailures`<sup>Optional</sup> <a name="toleratedNumberOfFailures" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.toleratedNumberOfFailures"></a>

```java
public java.lang.Number getToleratedNumberOfFailures();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#tolerated_number_of_failures TrafficManagerProfile#tolerated_number_of_failures}.

---

### TrafficManagerProfileMonitorConfigCustomHeader <a name="TrafficManagerProfileMonitorConfigCustomHeader" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfileMonitorConfigCustomHeader;

TrafficManagerProfileMonitorConfigCustomHeader.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#value TrafficManagerProfile#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#value TrafficManagerProfile#value}.

---

### TrafficManagerProfileTimeouts <a name="TrafficManagerProfileTimeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfileTimeouts;

TrafficManagerProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#create TrafficManagerProfile#create}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#delete TrafficManagerProfile#delete}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#read TrafficManagerProfile#read}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#update TrafficManagerProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#create TrafficManagerProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#delete TrafficManagerProfile#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#read TrafficManagerProfile#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/traffic_manager_profile#update TrafficManagerProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerProfileDnsConfigOutputReference <a name="TrafficManagerProfileDnsConfigOutputReference" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfileDnsConfigOutputReference;

new TrafficManagerProfileDnsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.relativeNameInput">relativeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.relativeName">relativeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relativeNameInput`<sup>Optional</sup> <a name="relativeNameInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.relativeNameInput"></a>

```java
public java.lang.String getRelativeNameInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `relativeName`<sup>Required</sup> <a name="relativeName" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.relativeName"></a>

```java
public java.lang.String getRelativeName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.internalValue"></a>

```java
public TrafficManagerProfileDnsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a>

---


### TrafficManagerProfileMonitorConfigCustomHeaderList <a name="TrafficManagerProfileMonitorConfigCustomHeaderList" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfileMonitorConfigCustomHeaderList;

new TrafficManagerProfileMonitorConfigCustomHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.get"></a>

```java
public TrafficManagerProfileMonitorConfigCustomHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader">TrafficManagerProfileMonitorConfigCustomHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader">TrafficManagerProfileMonitorConfigCustomHeader</a>>

---


### TrafficManagerProfileMonitorConfigCustomHeaderOutputReference <a name="TrafficManagerProfileMonitorConfigCustomHeaderOutputReference" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference;

new TrafficManagerProfileMonitorConfigCustomHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader">TrafficManagerProfileMonitorConfigCustomHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader">TrafficManagerProfileMonitorConfigCustomHeader</a>

---


### TrafficManagerProfileMonitorConfigOutputReference <a name="TrafficManagerProfileMonitorConfigOutputReference" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfileMonitorConfigOutputReference;

new TrafficManagerProfileMonitorConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.putCustomHeader">putCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetCustomHeader">resetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetExpectedStatusCodeRanges">resetExpectedStatusCodeRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetIntervalInSeconds">resetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetToleratedNumberOfFailures">resetToleratedNumberOfFailures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomHeader` <a name="putCustomHeader" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.putCustomHeader"></a>

```java
public void putCustomHeader(IResolvable OR java.util.List<TrafficManagerProfileMonitorConfigCustomHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.putCustomHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader">TrafficManagerProfileMonitorConfigCustomHeader</a>>

---

##### `resetCustomHeader` <a name="resetCustomHeader" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetCustomHeader"></a>

```java
public void resetCustomHeader()
```

##### `resetExpectedStatusCodeRanges` <a name="resetExpectedStatusCodeRanges" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetExpectedStatusCodeRanges"></a>

```java
public void resetExpectedStatusCodeRanges()
```

##### `resetIntervalInSeconds` <a name="resetIntervalInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetIntervalInSeconds"></a>

```java
public void resetIntervalInSeconds()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```

##### `resetToleratedNumberOfFailures` <a name="resetToleratedNumberOfFailures" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetToleratedNumberOfFailures"></a>

```java
public void resetToleratedNumberOfFailures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.customHeader">customHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList">TrafficManagerProfileMonitorConfigCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.customHeaderInput">customHeaderInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader">TrafficManagerProfileMonitorConfigCustomHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.expectedStatusCodeRangesInput">expectedStatusCodeRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.toleratedNumberOfFailuresInput">toleratedNumberOfFailuresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.expectedStatusCodeRanges">expectedStatusCodeRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.toleratedNumberOfFailures">toleratedNumberOfFailures</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customHeader`<sup>Required</sup> <a name="customHeader" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.customHeader"></a>

```java
public TrafficManagerProfileMonitorConfigCustomHeaderList getCustomHeader();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList">TrafficManagerProfileMonitorConfigCustomHeaderList</a>

---

##### `customHeaderInput`<sup>Optional</sup> <a name="customHeaderInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.customHeaderInput"></a>

```java
public java.lang.Object getCustomHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader">TrafficManagerProfileMonitorConfigCustomHeader</a>>

---

##### `expectedStatusCodeRangesInput`<sup>Optional</sup> <a name="expectedStatusCodeRangesInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.expectedStatusCodeRangesInput"></a>

```java
public java.util.List<java.lang.String> getExpectedStatusCodeRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.intervalInSecondsInput"></a>

```java
public java.lang.Number getIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `toleratedNumberOfFailuresInput`<sup>Optional</sup> <a name="toleratedNumberOfFailuresInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.toleratedNumberOfFailuresInput"></a>

```java
public java.lang.Number getToleratedNumberOfFailuresInput();
```

- *Type:* java.lang.Number

---

##### `expectedStatusCodeRanges`<sup>Required</sup> <a name="expectedStatusCodeRanges" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.expectedStatusCodeRanges"></a>

```java
public java.util.List<java.lang.String> getExpectedStatusCodeRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `toleratedNumberOfFailures`<sup>Required</sup> <a name="toleratedNumberOfFailures" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.toleratedNumberOfFailures"></a>

```java
public java.lang.Number getToleratedNumberOfFailures();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.internalValue"></a>

```java
public TrafficManagerProfileMonitorConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a>

---


### TrafficManagerProfileTimeoutsOutputReference <a name="TrafficManagerProfileTimeoutsOutputReference" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.traffic_manager_profile.TrafficManagerProfileTimeoutsOutputReference;

new TrafficManagerProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a>

---




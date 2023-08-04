# `azurerm_frontdoor`

Refer to the Terraform Registory for docs: [`azurerm_frontdoor`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor).

# `frontdoor` Submodule <a name="`frontdoor` Submodule" id="@cdktf/provider-azurerm.frontdoor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Frontdoor <a name="Frontdoor" id="@cdktf/provider-azurerm.frontdoor.Frontdoor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor azurerm_frontdoor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.Frontdoor;

Frontdoor.Builder.create(Construct scope, java.lang.String id)
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
    .backendPool(IResolvable)
    .backendPool(java.util.List<FrontdoorBackendPool>)
    .backendPoolHealthProbe(IResolvable)
    .backendPoolHealthProbe(java.util.List<FrontdoorBackendPoolHealthProbe>)
    .backendPoolLoadBalancing(IResolvable)
    .backendPoolLoadBalancing(java.util.List<FrontdoorBackendPoolLoadBalancing>)
    .frontendEndpoint(IResolvable)
    .frontendEndpoint(java.util.List<FrontdoorFrontendEndpoint>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .routingRule(IResolvable)
    .routingRule(java.util.List<FrontdoorRoutingRule>)
//  .backendPoolSettings(IResolvable)
//  .backendPoolSettings(java.util.List<FrontdoorBackendPoolSettings>)
//  .friendlyName(java.lang.String)
//  .id(java.lang.String)
//  .loadBalancerEnabled(java.lang.Boolean)
//  .loadBalancerEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FrontdoorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPool">backendPool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>></code> | backend_pool block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolHealthProbe">backendPoolHealthProbe</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>></code> | backend_pool_health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolLoadBalancing">backendPoolLoadBalancing</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>></code> | backend_pool_load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.frontendEndpoint">frontendEndpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>></code> | frontend_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.routingRule">routingRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>></code> | routing_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolSettings">backendPoolSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>></code> | backend_pool_settings block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#id Frontdoor#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.loadBalancerEnabled">loadBalancerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#tags Frontdoor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendPool`<sup>Required</sup> <a name="backendPool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPool"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>>

backend_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pool Frontdoor#backend_pool}

---

##### `backendPoolHealthProbe`<sup>Required</sup> <a name="backendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolHealthProbe"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>>

backend_pool_health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pool_health_probe Frontdoor#backend_pool_health_probe}

---

##### `backendPoolLoadBalancing`<sup>Required</sup> <a name="backendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolLoadBalancing"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>>

backend_pool_load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pool_load_balancing Frontdoor#backend_pool_load_balancing}

---

##### `frontendEndpoint`<sup>Required</sup> <a name="frontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.frontendEndpoint"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>>

frontend_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#frontend_endpoint Frontdoor#frontend_endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}.

---

##### `routingRule`<sup>Required</sup> <a name="routingRule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.routingRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>>

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#routing_rule Frontdoor#routing_rule}

---

##### `backendPoolSettings`<sup>Optional</sup> <a name="backendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.backendPoolSettings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>>

backend_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pool_settings Frontdoor#backend_pool_settings}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.friendlyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#id Frontdoor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerEnabled`<sup>Optional</sup> <a name="loadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.loadBalancerEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#tags Frontdoor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#timeouts Frontdoor#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool">putBackendPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe">putBackendPoolHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing">putBackendPoolLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings">putBackendPoolSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint">putFrontendEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule">putRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetBackendPoolSettings">resetBackendPoolSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetLoadBalancerEnabled">resetLoadBalancerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBackendPool` <a name="putBackendPool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool"></a>

```java
public void putBackendPool(IResolvable OR java.util.List<FrontdoorBackendPool> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>>

---

##### `putBackendPoolHealthProbe` <a name="putBackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe"></a>

```java
public void putBackendPoolHealthProbe(IResolvable OR java.util.List<FrontdoorBackendPoolHealthProbe> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>>

---

##### `putBackendPoolLoadBalancing` <a name="putBackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing"></a>

```java
public void putBackendPoolLoadBalancing(IResolvable OR java.util.List<FrontdoorBackendPoolLoadBalancing> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>>

---

##### `putBackendPoolSettings` <a name="putBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings"></a>

```java
public void putBackendPoolSettings(IResolvable OR java.util.List<FrontdoorBackendPoolSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>>

---

##### `putFrontendEndpoint` <a name="putFrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint"></a>

```java
public void putFrontendEndpoint(IResolvable OR java.util.List<FrontdoorFrontendEndpoint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>>

---

##### `putRoutingRule` <a name="putRoutingRule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule"></a>

```java
public void putRoutingRule(IResolvable OR java.util.List<FrontdoorRoutingRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts"></a>

```java
public void putTimeouts(FrontdoorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

---

##### `resetBackendPoolSettings` <a name="resetBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetBackendPoolSettings"></a>

```java
public void resetBackendPoolSettings()
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetFriendlyName"></a>

```java
public void resetFriendlyName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetId"></a>

```java
public void resetId()
```

##### `resetLoadBalancerEnabled` <a name="resetLoadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetLoadBalancerEnabled"></a>

```java
public void resetLoadBalancerEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.Frontdoor;

Frontdoor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.Frontdoor;

Frontdoor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.Frontdoor;

Frontdoor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPool">backendPool</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList">FrontdoorBackendPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbe">backendPoolHealthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList">FrontdoorBackendPoolHealthProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbes">backendPoolHealthProbes</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancing">backendPoolLoadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList">FrontdoorBackendPoolLoadBalancingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingSettings">backendPoolLoadBalancingSettings</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPools">backendPools</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettings">backendPoolSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList">FrontdoorBackendPoolSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cname">cname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.explicitResourceOrder">explicitResourceOrder</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList">FrontdoorExplicitResourceOrderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoint">frontendEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList">FrontdoorFrontendEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoints">frontendEndpoints</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.headerFrontdoorId">headerFrontdoorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRule">routingRule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList">FrontdoorRoutingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRules">routingRules</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference">FrontdoorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbeInput">backendPoolHealthProbeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolInput">backendPoolInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingInput">backendPoolLoadBalancingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettingsInput">backendPoolSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyNameInput">friendlyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpointInput">frontendEndpointInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabledInput">loadBalancerEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRuleInput">routingRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabled">loadBalancerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendPool`<sup>Required</sup> <a name="backendPool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPool"></a>

```java
public FrontdoorBackendPoolList getBackendPool();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList">FrontdoorBackendPoolList</a>

---

##### `backendPoolHealthProbe`<sup>Required</sup> <a name="backendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbe"></a>

```java
public FrontdoorBackendPoolHealthProbeList getBackendPoolHealthProbe();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList">FrontdoorBackendPoolHealthProbeList</a>

---

##### `backendPoolHealthProbes`<sup>Required</sup> <a name="backendPoolHealthProbes" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbes"></a>

```java
public StringMap getBackendPoolHealthProbes();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `backendPoolLoadBalancing`<sup>Required</sup> <a name="backendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancing"></a>

```java
public FrontdoorBackendPoolLoadBalancingList getBackendPoolLoadBalancing();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList">FrontdoorBackendPoolLoadBalancingList</a>

---

##### `backendPoolLoadBalancingSettings`<sup>Required</sup> <a name="backendPoolLoadBalancingSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingSettings"></a>

```java
public StringMap getBackendPoolLoadBalancingSettings();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `backendPools`<sup>Required</sup> <a name="backendPools" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPools"></a>

```java
public StringMap getBackendPools();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `backendPoolSettings`<sup>Required</sup> <a name="backendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettings"></a>

```java
public FrontdoorBackendPoolSettingsList getBackendPoolSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList">FrontdoorBackendPoolSettingsList</a>

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cname"></a>

```java
public java.lang.String getCname();
```

- *Type:* java.lang.String

---

##### `explicitResourceOrder`<sup>Required</sup> <a name="explicitResourceOrder" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.explicitResourceOrder"></a>

```java
public FrontdoorExplicitResourceOrderList getExplicitResourceOrder();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList">FrontdoorExplicitResourceOrderList</a>

---

##### `frontendEndpoint`<sup>Required</sup> <a name="frontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoint"></a>

```java
public FrontdoorFrontendEndpointList getFrontendEndpoint();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList">FrontdoorFrontendEndpointList</a>

---

##### `frontendEndpoints`<sup>Required</sup> <a name="frontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoints"></a>

```java
public StringMap getFrontendEndpoints();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `headerFrontdoorId`<sup>Required</sup> <a name="headerFrontdoorId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.headerFrontdoorId"></a>

```java
public java.lang.String getHeaderFrontdoorId();
```

- *Type:* java.lang.String

---

##### `routingRule`<sup>Required</sup> <a name="routingRule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRule"></a>

```java
public FrontdoorRoutingRuleList getRoutingRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList">FrontdoorRoutingRuleList</a>

---

##### `routingRules`<sup>Required</sup> <a name="routingRules" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRules"></a>

```java
public StringMap getRoutingRules();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeouts"></a>

```java
public FrontdoorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference">FrontdoorTimeoutsOutputReference</a>

---

##### `backendPoolHealthProbeInput`<sup>Optional</sup> <a name="backendPoolHealthProbeInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbeInput"></a>

```java
public java.lang.Object getBackendPoolHealthProbeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>>

---

##### `backendPoolInput`<sup>Optional</sup> <a name="backendPoolInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolInput"></a>

```java
public java.lang.Object getBackendPoolInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>>

---

##### `backendPoolLoadBalancingInput`<sup>Optional</sup> <a name="backendPoolLoadBalancingInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingInput"></a>

```java
public java.lang.Object getBackendPoolLoadBalancingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>>

---

##### `backendPoolSettingsInput`<sup>Optional</sup> <a name="backendPoolSettingsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettingsInput"></a>

```java
public java.lang.Object getBackendPoolSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>>

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyNameInput"></a>

```java
public java.lang.String getFriendlyNameInput();
```

- *Type:* java.lang.String

---

##### `frontendEndpointInput`<sup>Optional</sup> <a name="frontendEndpointInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpointInput"></a>

```java
public java.lang.Object getFrontendEndpointInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerEnabledInput`<sup>Optional</sup> <a name="loadBalancerEnabledInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabledInput"></a>

```java
public java.lang.Object getLoadBalancerEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `routingRuleInput`<sup>Optional</sup> <a name="routingRuleInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRuleInput"></a>

```java
public java.lang.Object getRoutingRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerEnabled`<sup>Required</sup> <a name="loadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabled"></a>

```java
public java.lang.Object getLoadBalancerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorBackendPool <a name="FrontdoorBackendPool" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPool;

FrontdoorBackendPool.builder()
    .backend(IResolvable)
    .backend(java.util.List<FrontdoorBackendPoolBackend>)
    .healthProbeName(java.lang.String)
    .loadBalancingName(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.backend">backend</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>></code> | backend block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.healthProbeName">healthProbeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.loadBalancingName">loadBalancingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}. |

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.backend"></a>

```java
public java.lang.Object getBackend();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend Frontdoor#backend}

---

##### `healthProbeName`<sup>Required</sup> <a name="healthProbeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.healthProbeName"></a>

```java
public java.lang.String getHealthProbeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}.

---

##### `loadBalancingName`<sup>Required</sup> <a name="loadBalancingName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.loadBalancingName"></a>

```java
public java.lang.String getLoadBalancingName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}.

---

### FrontdoorBackendPoolBackend <a name="FrontdoorBackendPoolBackend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolBackend;

FrontdoorBackendPoolBackend.builder()
    .address(java.lang.String)
    .hostHeader(java.lang.String)
    .httpPort(java.lang.Number)
    .httpsPort(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .priority(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#address Frontdoor#address}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.hostHeader">hostHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#host_header Frontdoor#host_header}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#http_port Frontdoor#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#https_port Frontdoor#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#priority Frontdoor#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#weight Frontdoor#weight}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#address Frontdoor#address}.

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.hostHeader"></a>

```java
public java.lang.String getHostHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#host_header Frontdoor#host_header}.

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#http_port Frontdoor#http_port}.

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#https_port Frontdoor#https_port}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#priority Frontdoor#priority}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#weight Frontdoor#weight}.

---

### FrontdoorBackendPoolHealthProbe <a name="FrontdoorBackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolHealthProbe;

FrontdoorBackendPoolHealthProbe.builder()
    .name(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .intervalInSeconds(java.lang.Number)
//  .path(java.lang.String)
//  .probeMethod(java.lang.String)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#path Frontdoor#path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.probeMethod">probeMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#protocol Frontdoor#protocol}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `intervalInSeconds`<sup>Optional</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#path Frontdoor#path}.

---

##### `probeMethod`<sup>Optional</sup> <a name="probeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.probeMethod"></a>

```java
public java.lang.String getProbeMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#protocol Frontdoor#protocol}.

---

### FrontdoorBackendPoolLoadBalancing <a name="FrontdoorBackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing;

FrontdoorBackendPoolLoadBalancing.builder()
    .name(java.lang.String)
//  .additionalLatencyMilliseconds(java.lang.Number)
//  .sampleSize(java.lang.Number)
//  .successfulSamplesRequired(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.additionalLatencyMilliseconds">additionalLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.sampleSize">sampleSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.successfulSamplesRequired">successfulSamplesRequired</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `additionalLatencyMilliseconds`<sup>Optional</sup> <a name="additionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.additionalLatencyMilliseconds"></a>

```java
public java.lang.Number getAdditionalLatencyMilliseconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}.

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.sampleSize"></a>

```java
public java.lang.Number getSampleSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}.

---

##### `successfulSamplesRequired`<sup>Optional</sup> <a name="successfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.successfulSamplesRequired"></a>

```java
public java.lang.Number getSuccessfulSamplesRequired();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}.

---

### FrontdoorBackendPoolSettings <a name="FrontdoorBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolSettings;

FrontdoorBackendPoolSettings.builder()
    .enforceBackendPoolsCertificateNameCheck(java.lang.Boolean)
    .enforceBackendPoolsCertificateNameCheck(IResolvable)
//  .backendPoolsSendReceiveTimeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.enforceBackendPoolsCertificateNameCheck">enforceBackendPoolsCertificateNameCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.backendPoolsSendReceiveTimeoutSeconds">backendPoolsSendReceiveTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}. |

---

##### `enforceBackendPoolsCertificateNameCheck`<sup>Required</sup> <a name="enforceBackendPoolsCertificateNameCheck" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.enforceBackendPoolsCertificateNameCheck"></a>

```java
public java.lang.Object getEnforceBackendPoolsCertificateNameCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}.

---

##### `backendPoolsSendReceiveTimeoutSeconds`<sup>Optional</sup> <a name="backendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.backendPoolsSendReceiveTimeoutSeconds"></a>

```java
public java.lang.Number getBackendPoolsSendReceiveTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}.

---

### FrontdoorConfig <a name="FrontdoorConfig" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorConfig;

FrontdoorConfig.builder()
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
    .backendPool(IResolvable)
    .backendPool(java.util.List<FrontdoorBackendPool>)
    .backendPoolHealthProbe(IResolvable)
    .backendPoolHealthProbe(java.util.List<FrontdoorBackendPoolHealthProbe>)
    .backendPoolLoadBalancing(IResolvable)
    .backendPoolLoadBalancing(java.util.List<FrontdoorBackendPoolLoadBalancing>)
    .frontendEndpoint(IResolvable)
    .frontendEndpoint(java.util.List<FrontdoorFrontendEndpoint>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .routingRule(IResolvable)
    .routingRule(java.util.List<FrontdoorRoutingRule>)
//  .backendPoolSettings(IResolvable)
//  .backendPoolSettings(java.util.List<FrontdoorBackendPoolSettings>)
//  .friendlyName(java.lang.String)
//  .id(java.lang.String)
//  .loadBalancerEnabled(java.lang.Boolean)
//  .loadBalancerEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FrontdoorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPool">backendPool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>></code> | backend_pool block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolHealthProbe">backendPoolHealthProbe</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>></code> | backend_pool_health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolLoadBalancing">backendPoolLoadBalancing</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>></code> | backend_pool_load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.frontendEndpoint">frontendEndpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>></code> | frontend_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.routingRule">routingRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>></code> | routing_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolSettings">backendPoolSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>></code> | backend_pool_settings block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#id Frontdoor#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.loadBalancerEnabled">loadBalancerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#tags Frontdoor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendPool`<sup>Required</sup> <a name="backendPool" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPool"></a>

```java
public java.lang.Object getBackendPool();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>>

backend_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pool Frontdoor#backend_pool}

---

##### `backendPoolHealthProbe`<sup>Required</sup> <a name="backendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolHealthProbe"></a>

```java
public java.lang.Object getBackendPoolHealthProbe();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>>

backend_pool_health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pool_health_probe Frontdoor#backend_pool_health_probe}

---

##### `backendPoolLoadBalancing`<sup>Required</sup> <a name="backendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolLoadBalancing"></a>

```java
public java.lang.Object getBackendPoolLoadBalancing();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>>

backend_pool_load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pool_load_balancing Frontdoor#backend_pool_load_balancing}

---

##### `frontendEndpoint`<sup>Required</sup> <a name="frontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.frontendEndpoint"></a>

```java
public java.lang.Object getFrontendEndpoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>>

frontend_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#frontend_endpoint Frontdoor#frontend_endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}.

---

##### `routingRule`<sup>Required</sup> <a name="routingRule" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.routingRule"></a>

```java
public java.lang.Object getRoutingRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>>

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#routing_rule Frontdoor#routing_rule}

---

##### `backendPoolSettings`<sup>Optional</sup> <a name="backendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolSettings"></a>

```java
public java.lang.Object getBackendPoolSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>>

backend_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pool_settings Frontdoor#backend_pool_settings}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#id Frontdoor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerEnabled`<sup>Optional</sup> <a name="loadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.loadBalancerEnabled"></a>

```java
public java.lang.Object getLoadBalancerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#tags Frontdoor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.timeouts"></a>

```java
public FrontdoorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#timeouts Frontdoor#timeouts}

---

### FrontdoorExplicitResourceOrder <a name="FrontdoorExplicitResourceOrder" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorExplicitResourceOrder;

FrontdoorExplicitResourceOrder.builder()
    .build();
```


### FrontdoorFrontendEndpoint <a name="FrontdoorFrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorFrontendEndpoint;

FrontdoorFrontendEndpoint.builder()
    .hostName(java.lang.String)
    .name(java.lang.String)
//  .sessionAffinityEnabled(java.lang.Boolean)
//  .sessionAffinityEnabled(IResolvable)
//  .sessionAffinityTtlSeconds(java.lang.Number)
//  .webApplicationFirewallPolicyLinkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#host_name Frontdoor#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityEnabled">sessionAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityTtlSeconds">sessionAffinityTtlSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.webApplicationFirewallPolicyLinkId">webApplicationFirewallPolicyLinkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#host_name Frontdoor#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `sessionAffinityEnabled`<sup>Optional</sup> <a name="sessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityEnabled"></a>

```java
public java.lang.Object getSessionAffinityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}.

---

##### `sessionAffinityTtlSeconds`<sup>Optional</sup> <a name="sessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityTtlSeconds"></a>

```java
public java.lang.Number getSessionAffinityTtlSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}.

---

##### `webApplicationFirewallPolicyLinkId`<sup>Optional</sup> <a name="webApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.webApplicationFirewallPolicyLinkId"></a>

```java
public java.lang.String getWebApplicationFirewallPolicyLinkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}.

---

### FrontdoorRoutingRule <a name="FrontdoorRoutingRule" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorRoutingRule;

FrontdoorRoutingRule.builder()
    .acceptedProtocols(java.util.List<java.lang.String>)
    .frontendEndpoints(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .patternsToMatch(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .forwardingConfiguration(FrontdoorRoutingRuleForwardingConfiguration)
//  .redirectConfiguration(FrontdoorRoutingRuleRedirectConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.acceptedProtocols">acceptedProtocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.frontendEndpoints">frontendEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.patternsToMatch">patternsToMatch</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.forwardingConfiguration">forwardingConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | forwarding_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.redirectConfiguration">redirectConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | redirect_configuration block. |

---

##### `acceptedProtocols`<sup>Required</sup> <a name="acceptedProtocols" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.acceptedProtocols"></a>

```java
public java.util.List<java.lang.String> getAcceptedProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}.

---

##### `frontendEndpoints`<sup>Required</sup> <a name="frontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.frontendEndpoints"></a>

```java
public java.util.List<java.lang.String> getFrontendEndpoints();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `patternsToMatch`<sup>Required</sup> <a name="patternsToMatch" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.patternsToMatch"></a>

```java
public java.util.List<java.lang.String> getPatternsToMatch();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `forwardingConfiguration`<sup>Optional</sup> <a name="forwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.forwardingConfiguration"></a>

```java
public FrontdoorRoutingRuleForwardingConfiguration getForwardingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

forwarding_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#forwarding_configuration Frontdoor#forwarding_configuration}

---

##### `redirectConfiguration`<sup>Optional</sup> <a name="redirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.redirectConfiguration"></a>

```java
public FrontdoorRoutingRuleRedirectConfiguration getRedirectConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

redirect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#redirect_configuration Frontdoor#redirect_configuration}

---

### FrontdoorRoutingRuleForwardingConfiguration <a name="FrontdoorRoutingRuleForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration;

FrontdoorRoutingRuleForwardingConfiguration.builder()
    .backendPoolName(java.lang.String)
//  .cacheDuration(java.lang.String)
//  .cacheEnabled(java.lang.Boolean)
//  .cacheEnabled(IResolvable)
//  .cacheQueryParameters(java.util.List<java.lang.String>)
//  .cacheQueryParameterStripDirective(java.lang.String)
//  .cacheUseDynamicCompression(java.lang.Boolean)
//  .cacheUseDynamicCompression(IResolvable)
//  .customForwardingPath(java.lang.String)
//  .forwardingProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.backendPoolName">backendPoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheDuration">cacheDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheEnabled">cacheEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameters">cacheQueryParameters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameterStripDirective">cacheQueryParameterStripDirective</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheUseDynamicCompression">cacheUseDynamicCompression</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.customForwardingPath">customForwardingPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.forwardingProtocol">forwardingProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}. |

---

##### `backendPoolName`<sup>Required</sup> <a name="backendPoolName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.backendPoolName"></a>

```java
public java.lang.String getBackendPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}.

---

##### `cacheDuration`<sup>Optional</sup> <a name="cacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheDuration"></a>

```java
public java.lang.String getCacheDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}.

---

##### `cacheEnabled`<sup>Optional</sup> <a name="cacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheEnabled"></a>

```java
public java.lang.Object getCacheEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}.

---

##### `cacheQueryParameters`<sup>Optional</sup> <a name="cacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameters"></a>

```java
public java.util.List<java.lang.String> getCacheQueryParameters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}.

---

##### `cacheQueryParameterStripDirective`<sup>Optional</sup> <a name="cacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameterStripDirective"></a>

```java
public java.lang.String getCacheQueryParameterStripDirective();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}.

---

##### `cacheUseDynamicCompression`<sup>Optional</sup> <a name="cacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheUseDynamicCompression"></a>

```java
public java.lang.Object getCacheUseDynamicCompression();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}.

---

##### `customForwardingPath`<sup>Optional</sup> <a name="customForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.customForwardingPath"></a>

```java
public java.lang.String getCustomForwardingPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}.

---

##### `forwardingProtocol`<sup>Optional</sup> <a name="forwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.forwardingProtocol"></a>

```java
public java.lang.String getForwardingProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}.

---

### FrontdoorRoutingRuleRedirectConfiguration <a name="FrontdoorRoutingRuleRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration;

FrontdoorRoutingRuleRedirectConfiguration.builder()
    .redirectProtocol(java.lang.String)
    .redirectType(java.lang.String)
//  .customFragment(java.lang.String)
//  .customHost(java.lang.String)
//  .customPath(java.lang.String)
//  .customQueryString(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectProtocol">redirectProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectType">redirectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customFragment">customFragment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customHost">customHost</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customPath">customPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customQueryString">customQueryString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}. |

---

##### `redirectProtocol`<sup>Required</sup> <a name="redirectProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectProtocol"></a>

```java
public java.lang.String getRedirectProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}.

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectType"></a>

```java
public java.lang.String getRedirectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}.

---

##### `customFragment`<sup>Optional</sup> <a name="customFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customFragment"></a>

```java
public java.lang.String getCustomFragment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}.

---

##### `customHost`<sup>Optional</sup> <a name="customHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customHost"></a>

```java
public java.lang.String getCustomHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}.

---

##### `customPath`<sup>Optional</sup> <a name="customPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customPath"></a>

```java
public java.lang.String getCustomPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}.

---

##### `customQueryString`<sup>Optional</sup> <a name="customQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customQueryString"></a>

```java
public java.lang.String getCustomQueryString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}.

---

### FrontdoorTimeouts <a name="FrontdoorTimeouts" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorTimeouts;

FrontdoorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#create Frontdoor#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#delete Frontdoor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#read Frontdoor#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#update Frontdoor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#create Frontdoor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#delete Frontdoor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#read Frontdoor#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/frontdoor#update Frontdoor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorBackendPoolBackendList <a name="FrontdoorBackendPoolBackendList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolBackendList;

new FrontdoorBackendPoolBackendList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get"></a>

```java
public FrontdoorBackendPoolBackendOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>>

---


### FrontdoorBackendPoolBackendOutputReference <a name="FrontdoorBackendPoolBackendOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference;

new FrontdoorBackendPoolBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeaderInput">hostHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPortInput">httpPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPortInput">httpsPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeader">hostHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostHeaderInput`<sup>Optional</sup> <a name="hostHeaderInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeaderInput"></a>

```java
public java.lang.String getHostHeaderInput();
```

- *Type:* java.lang.String

---

##### `httpPortInput`<sup>Optional</sup> <a name="httpPortInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPortInput"></a>

```java
public java.lang.Number getHttpPortInput();
```

- *Type:* java.lang.Number

---

##### `httpsPortInput`<sup>Optional</sup> <a name="httpsPortInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPortInput"></a>

```java
public java.lang.Number getHttpsPortInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeader"></a>

```java
public java.lang.String getHostHeader();
```

- *Type:* java.lang.String

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>

---


### FrontdoorBackendPoolHealthProbeList <a name="FrontdoorBackendPoolHealthProbeList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList;

new FrontdoorBackendPoolHealthProbeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get"></a>

```java
public FrontdoorBackendPoolHealthProbeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>>

---


### FrontdoorBackendPoolHealthProbeOutputReference <a name="FrontdoorBackendPoolHealthProbeOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference;

new FrontdoorBackendPoolHealthProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetIntervalInSeconds">resetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProbeMethod">resetProbeMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIntervalInSeconds` <a name="resetIntervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetIntervalInSeconds"></a>

```java
public void resetIntervalInSeconds()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetProbeMethod` <a name="resetProbeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProbeMethod"></a>

```java
public void resetProbeMethod()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethodInput">probeMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethod">probeMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSecondsInput"></a>

```java
public java.lang.Number getIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `probeMethodInput`<sup>Optional</sup> <a name="probeMethodInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethodInput"></a>

```java
public java.lang.String getProbeMethodInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `probeMethod`<sup>Required</sup> <a name="probeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethod"></a>

```java
public java.lang.String getProbeMethod();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>

---


### FrontdoorBackendPoolList <a name="FrontdoorBackendPoolList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolList;

new FrontdoorBackendPoolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get"></a>

```java
public FrontdoorBackendPoolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>>

---


### FrontdoorBackendPoolLoadBalancingList <a name="FrontdoorBackendPoolLoadBalancingList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList;

new FrontdoorBackendPoolLoadBalancingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get"></a>

```java
public FrontdoorBackendPoolLoadBalancingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>>

---


### FrontdoorBackendPoolLoadBalancingOutputReference <a name="FrontdoorBackendPoolLoadBalancingOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference;

new FrontdoorBackendPoolLoadBalancingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetAdditionalLatencyMilliseconds">resetAdditionalLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSampleSize">resetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSuccessfulSamplesRequired">resetSuccessfulSamplesRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalLatencyMilliseconds` <a name="resetAdditionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetAdditionalLatencyMilliseconds"></a>

```java
public void resetAdditionalLatencyMilliseconds()
```

##### `resetSampleSize` <a name="resetSampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSampleSize"></a>

```java
public void resetSampleSize()
```

##### `resetSuccessfulSamplesRequired` <a name="resetSuccessfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSuccessfulSamplesRequired"></a>

```java
public void resetSuccessfulSamplesRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMillisecondsInput">additionalLatencyMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSizeInput">sampleSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequiredInput">successfulSamplesRequiredInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMilliseconds">additionalLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSize">sampleSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequired">successfulSamplesRequired</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `additionalLatencyMillisecondsInput`<sup>Optional</sup> <a name="additionalLatencyMillisecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMillisecondsInput"></a>

```java
public java.lang.Number getAdditionalLatencyMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sampleSizeInput`<sup>Optional</sup> <a name="sampleSizeInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSizeInput"></a>

```java
public java.lang.Number getSampleSizeInput();
```

- *Type:* java.lang.Number

---

##### `successfulSamplesRequiredInput`<sup>Optional</sup> <a name="successfulSamplesRequiredInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequiredInput"></a>

```java
public java.lang.Number getSuccessfulSamplesRequiredInput();
```

- *Type:* java.lang.Number

---

##### `additionalLatencyMilliseconds`<sup>Required</sup> <a name="additionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMilliseconds"></a>

```java
public java.lang.Number getAdditionalLatencyMilliseconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sampleSize`<sup>Required</sup> <a name="sampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSize"></a>

```java
public java.lang.Number getSampleSize();
```

- *Type:* java.lang.Number

---

##### `successfulSamplesRequired`<sup>Required</sup> <a name="successfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```java
public java.lang.Number getSuccessfulSamplesRequired();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>

---


### FrontdoorBackendPoolOutputReference <a name="FrontdoorBackendPoolOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolOutputReference;

new FrontdoorBackendPoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend">putBackend</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackend` <a name="putBackend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend"></a>

```java
public void putBackend(IResolvable OR java.util.List<FrontdoorBackendPoolBackend> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList">FrontdoorBackendPoolBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backendInput">backendInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeNameInput">healthProbeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingNameInput">loadBalancingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeName">healthProbeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingName">loadBalancingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backend"></a>

```java
public FrontdoorBackendPoolBackendList getBackend();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList">FrontdoorBackendPoolBackendList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backendInput"></a>

```java
public java.lang.Object getBackendInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>>

---

##### `healthProbeNameInput`<sup>Optional</sup> <a name="healthProbeNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeNameInput"></a>

```java
public java.lang.String getHealthProbeNameInput();
```

- *Type:* java.lang.String

---

##### `loadBalancingNameInput`<sup>Optional</sup> <a name="loadBalancingNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingNameInput"></a>

```java
public java.lang.String getLoadBalancingNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `healthProbeName`<sup>Required</sup> <a name="healthProbeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeName"></a>

```java
public java.lang.String getHealthProbeName();
```

- *Type:* java.lang.String

---

##### `loadBalancingName`<sup>Required</sup> <a name="loadBalancingName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingName"></a>

```java
public java.lang.String getLoadBalancingName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>

---


### FrontdoorBackendPoolSettingsList <a name="FrontdoorBackendPoolSettingsList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolSettingsList;

new FrontdoorBackendPoolSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get"></a>

```java
public FrontdoorBackendPoolSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>>

---


### FrontdoorBackendPoolSettingsOutputReference <a name="FrontdoorBackendPoolSettingsOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference;

new FrontdoorBackendPoolSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resetBackendPoolsSendReceiveTimeoutSeconds">resetBackendPoolsSendReceiveTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPoolsSendReceiveTimeoutSeconds` <a name="resetBackendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resetBackendPoolsSendReceiveTimeoutSeconds"></a>

```java
public void resetBackendPoolsSendReceiveTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSecondsInput">backendPoolsSendReceiveTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheckInput">enforceBackendPoolsCertificateNameCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSeconds">backendPoolsSendReceiveTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheck">enforceBackendPoolsCertificateNameCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendPoolsSendReceiveTimeoutSecondsInput`<sup>Optional</sup> <a name="backendPoolsSendReceiveTimeoutSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSecondsInput"></a>

```java
public java.lang.Number getBackendPoolsSendReceiveTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `enforceBackendPoolsCertificateNameCheckInput`<sup>Optional</sup> <a name="enforceBackendPoolsCertificateNameCheckInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheckInput"></a>

```java
public java.lang.Object getEnforceBackendPoolsCertificateNameCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backendPoolsSendReceiveTimeoutSeconds`<sup>Required</sup> <a name="backendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSeconds"></a>

```java
public java.lang.Number getBackendPoolsSendReceiveTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `enforceBackendPoolsCertificateNameCheck`<sup>Required</sup> <a name="enforceBackendPoolsCertificateNameCheck" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheck"></a>

```java
public java.lang.Object getEnforceBackendPoolsCertificateNameCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>

---


### FrontdoorExplicitResourceOrderList <a name="FrontdoorExplicitResourceOrderList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorExplicitResourceOrderList;

new FrontdoorExplicitResourceOrderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get"></a>

```java
public FrontdoorExplicitResourceOrderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FrontdoorExplicitResourceOrderOutputReference <a name="FrontdoorExplicitResourceOrderOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference;

new FrontdoorExplicitResourceOrderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolHealthProbeIds">backendPoolHealthProbeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolIds">backendPoolIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolLoadBalancingIds">backendPoolLoadBalancingIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.frontendEndpointIds">frontendEndpointIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.routingRuleIds">routingRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder">FrontdoorExplicitResourceOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendPoolHealthProbeIds`<sup>Required</sup> <a name="backendPoolHealthProbeIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolHealthProbeIds"></a>

```java
public java.util.List<java.lang.String> getBackendPoolHealthProbeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendPoolIds`<sup>Required</sup> <a name="backendPoolIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolIds"></a>

```java
public java.util.List<java.lang.String> getBackendPoolIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendPoolLoadBalancingIds`<sup>Required</sup> <a name="backendPoolLoadBalancingIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolLoadBalancingIds"></a>

```java
public java.util.List<java.lang.String> getBackendPoolLoadBalancingIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `frontendEndpointIds`<sup>Required</sup> <a name="frontendEndpointIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.frontendEndpointIds"></a>

```java
public java.util.List<java.lang.String> getFrontendEndpointIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `routingRuleIds`<sup>Required</sup> <a name="routingRuleIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.routingRuleIds"></a>

```java
public java.util.List<java.lang.String> getRoutingRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.internalValue"></a>

```java
public FrontdoorExplicitResourceOrder getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder">FrontdoorExplicitResourceOrder</a>

---


### FrontdoorFrontendEndpointList <a name="FrontdoorFrontendEndpointList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorFrontendEndpointList;

new FrontdoorFrontendEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get"></a>

```java
public FrontdoorFrontendEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>>

---


### FrontdoorFrontendEndpointOutputReference <a name="FrontdoorFrontendEndpointOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference;

new FrontdoorFrontendEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityEnabled">resetSessionAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityTtlSeconds">resetSessionAffinityTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetWebApplicationFirewallPolicyLinkId">resetWebApplicationFirewallPolicyLinkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSessionAffinityEnabled` <a name="resetSessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityEnabled"></a>

```java
public void resetSessionAffinityEnabled()
```

##### `resetSessionAffinityTtlSeconds` <a name="resetSessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityTtlSeconds"></a>

```java
public void resetSessionAffinityTtlSeconds()
```

##### `resetWebApplicationFirewallPolicyLinkId` <a name="resetWebApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetWebApplicationFirewallPolicyLinkId"></a>

```java
public void resetWebApplicationFirewallPolicyLinkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabledInput">sessionAffinityEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSecondsInput">sessionAffinityTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkIdInput">webApplicationFirewallPolicyLinkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabled">sessionAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSeconds">sessionAffinityTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkId">webApplicationFirewallPolicyLinkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sessionAffinityEnabledInput`<sup>Optional</sup> <a name="sessionAffinityEnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabledInput"></a>

```java
public java.lang.Object getSessionAffinityEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionAffinityTtlSecondsInput`<sup>Optional</sup> <a name="sessionAffinityTtlSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSecondsInput"></a>

```java
public java.lang.Number getSessionAffinityTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `webApplicationFirewallPolicyLinkIdInput`<sup>Optional</sup> <a name="webApplicationFirewallPolicyLinkIdInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkIdInput"></a>

```java
public java.lang.String getWebApplicationFirewallPolicyLinkIdInput();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sessionAffinityEnabled`<sup>Required</sup> <a name="sessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabled"></a>

```java
public java.lang.Object getSessionAffinityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionAffinityTtlSeconds`<sup>Required</sup> <a name="sessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSeconds"></a>

```java
public java.lang.Number getSessionAffinityTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `webApplicationFirewallPolicyLinkId`<sup>Required</sup> <a name="webApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkId"></a>

```java
public java.lang.String getWebApplicationFirewallPolicyLinkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>

---


### FrontdoorRoutingRuleForwardingConfigurationOutputReference <a name="FrontdoorRoutingRuleForwardingConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference;

new FrontdoorRoutingRuleForwardingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheDuration">resetCacheDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheEnabled">resetCacheEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameters">resetCacheQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameterStripDirective">resetCacheQueryParameterStripDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheUseDynamicCompression">resetCacheUseDynamicCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCustomForwardingPath">resetCustomForwardingPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetForwardingProtocol">resetForwardingProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheDuration` <a name="resetCacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheDuration"></a>

```java
public void resetCacheDuration()
```

##### `resetCacheEnabled` <a name="resetCacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheEnabled"></a>

```java
public void resetCacheEnabled()
```

##### `resetCacheQueryParameters` <a name="resetCacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameters"></a>

```java
public void resetCacheQueryParameters()
```

##### `resetCacheQueryParameterStripDirective` <a name="resetCacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameterStripDirective"></a>

```java
public void resetCacheQueryParameterStripDirective()
```

##### `resetCacheUseDynamicCompression` <a name="resetCacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheUseDynamicCompression"></a>

```java
public void resetCacheUseDynamicCompression()
```

##### `resetCustomForwardingPath` <a name="resetCustomForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCustomForwardingPath"></a>

```java
public void resetCustomForwardingPath()
```

##### `resetForwardingProtocol` <a name="resetForwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetForwardingProtocol"></a>

```java
public void resetForwardingProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolNameInput">backendPoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDurationInput">cacheDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabledInput">cacheEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParametersInput">cacheQueryParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirectiveInput">cacheQueryParameterStripDirectiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompressionInput">cacheUseDynamicCompressionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPathInput">customForwardingPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocolInput">forwardingProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolName">backendPoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDuration">cacheDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabled">cacheEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameters">cacheQueryParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirective">cacheQueryParameterStripDirective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompression">cacheUseDynamicCompression</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPath">customForwardingPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocol">forwardingProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendPoolNameInput`<sup>Optional</sup> <a name="backendPoolNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolNameInput"></a>

```java
public java.lang.String getBackendPoolNameInput();
```

- *Type:* java.lang.String

---

##### `cacheDurationInput`<sup>Optional</sup> <a name="cacheDurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDurationInput"></a>

```java
public java.lang.String getCacheDurationInput();
```

- *Type:* java.lang.String

---

##### `cacheEnabledInput`<sup>Optional</sup> <a name="cacheEnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabledInput"></a>

```java
public java.lang.Object getCacheEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheQueryParametersInput`<sup>Optional</sup> <a name="cacheQueryParametersInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParametersInput"></a>

```java
public java.util.List<java.lang.String> getCacheQueryParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheQueryParameterStripDirectiveInput`<sup>Optional</sup> <a name="cacheQueryParameterStripDirectiveInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirectiveInput"></a>

```java
public java.lang.String getCacheQueryParameterStripDirectiveInput();
```

- *Type:* java.lang.String

---

##### `cacheUseDynamicCompressionInput`<sup>Optional</sup> <a name="cacheUseDynamicCompressionInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompressionInput"></a>

```java
public java.lang.Object getCacheUseDynamicCompressionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customForwardingPathInput`<sup>Optional</sup> <a name="customForwardingPathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPathInput"></a>

```java
public java.lang.String getCustomForwardingPathInput();
```

- *Type:* java.lang.String

---

##### `forwardingProtocolInput`<sup>Optional</sup> <a name="forwardingProtocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocolInput"></a>

```java
public java.lang.String getForwardingProtocolInput();
```

- *Type:* java.lang.String

---

##### `backendPoolName`<sup>Required</sup> <a name="backendPoolName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolName"></a>

```java
public java.lang.String getBackendPoolName();
```

- *Type:* java.lang.String

---

##### `cacheDuration`<sup>Required</sup> <a name="cacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDuration"></a>

```java
public java.lang.String getCacheDuration();
```

- *Type:* java.lang.String

---

##### `cacheEnabled`<sup>Required</sup> <a name="cacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabled"></a>

```java
public java.lang.Object getCacheEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheQueryParameters`<sup>Required</sup> <a name="cacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameters"></a>

```java
public java.util.List<java.lang.String> getCacheQueryParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheQueryParameterStripDirective`<sup>Required</sup> <a name="cacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirective"></a>

```java
public java.lang.String getCacheQueryParameterStripDirective();
```

- *Type:* java.lang.String

---

##### `cacheUseDynamicCompression`<sup>Required</sup> <a name="cacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompression"></a>

```java
public java.lang.Object getCacheUseDynamicCompression();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customForwardingPath`<sup>Required</sup> <a name="customForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPath"></a>

```java
public java.lang.String getCustomForwardingPath();
```

- *Type:* java.lang.String

---

##### `forwardingProtocol`<sup>Required</sup> <a name="forwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocol"></a>

```java
public java.lang.String getForwardingProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.internalValue"></a>

```java
public FrontdoorRoutingRuleForwardingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---


### FrontdoorRoutingRuleList <a name="FrontdoorRoutingRuleList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorRoutingRuleList;

new FrontdoorRoutingRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get"></a>

```java
public FrontdoorRoutingRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>>

---


### FrontdoorRoutingRuleOutputReference <a name="FrontdoorRoutingRuleOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorRoutingRuleOutputReference;

new FrontdoorRoutingRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration">putForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration">putRedirectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetForwardingConfiguration">resetForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetRedirectConfiguration">resetRedirectConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForwardingConfiguration` <a name="putForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration"></a>

```java
public void putForwardingConfiguration(FrontdoorRoutingRuleForwardingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---

##### `putRedirectConfiguration` <a name="putRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration"></a>

```java
public void putRedirectConfiguration(FrontdoorRoutingRuleRedirectConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetForwardingConfiguration` <a name="resetForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetForwardingConfiguration"></a>

```java
public void resetForwardingConfiguration()
```

##### `resetRedirectConfiguration` <a name="resetRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetRedirectConfiguration"></a>

```java
public void resetRedirectConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfiguration">forwardingConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference">FrontdoorRoutingRuleForwardingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfiguration">redirectConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference">FrontdoorRoutingRuleRedirectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocolsInput">acceptedProtocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfigurationInput">forwardingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpointsInput">frontendEndpointsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatchInput">patternsToMatchInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfigurationInput">redirectConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocols">acceptedProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpoints">frontendEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatch">patternsToMatch</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forwardingConfiguration`<sup>Required</sup> <a name="forwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfiguration"></a>

```java
public FrontdoorRoutingRuleForwardingConfigurationOutputReference getForwardingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference">FrontdoorRoutingRuleForwardingConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `redirectConfiguration`<sup>Required</sup> <a name="redirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfiguration"></a>

```java
public FrontdoorRoutingRuleRedirectConfigurationOutputReference getRedirectConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference">FrontdoorRoutingRuleRedirectConfigurationOutputReference</a>

---

##### `acceptedProtocolsInput`<sup>Optional</sup> <a name="acceptedProtocolsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocolsInput"></a>

```java
public java.util.List<java.lang.String> getAcceptedProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardingConfigurationInput`<sup>Optional</sup> <a name="forwardingConfigurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfigurationInput"></a>

```java
public FrontdoorRoutingRuleForwardingConfiguration getForwardingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---

##### `frontendEndpointsInput`<sup>Optional</sup> <a name="frontendEndpointsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpointsInput"></a>

```java
public java.util.List<java.lang.String> getFrontendEndpointsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `patternsToMatchInput`<sup>Optional</sup> <a name="patternsToMatchInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatchInput"></a>

```java
public java.util.List<java.lang.String> getPatternsToMatchInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `redirectConfigurationInput`<sup>Optional</sup> <a name="redirectConfigurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfigurationInput"></a>

```java
public FrontdoorRoutingRuleRedirectConfiguration getRedirectConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---

##### `acceptedProtocols`<sup>Required</sup> <a name="acceptedProtocols" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocols"></a>

```java
public java.util.List<java.lang.String> getAcceptedProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frontendEndpoints`<sup>Required</sup> <a name="frontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpoints"></a>

```java
public java.util.List<java.lang.String> getFrontendEndpoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `patternsToMatch`<sup>Required</sup> <a name="patternsToMatch" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatch"></a>

```java
public java.util.List<java.lang.String> getPatternsToMatch();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>

---


### FrontdoorRoutingRuleRedirectConfigurationOutputReference <a name="FrontdoorRoutingRuleRedirectConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference;

new FrontdoorRoutingRuleRedirectConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomFragment">resetCustomFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomHost">resetCustomHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomPath">resetCustomPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomQueryString">resetCustomQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomFragment` <a name="resetCustomFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomFragment"></a>

```java
public void resetCustomFragment()
```

##### `resetCustomHost` <a name="resetCustomHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomHost"></a>

```java
public void resetCustomHost()
```

##### `resetCustomPath` <a name="resetCustomPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomPath"></a>

```java
public void resetCustomPath()
```

##### `resetCustomQueryString` <a name="resetCustomQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomQueryString"></a>

```java
public void resetCustomQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragmentInput">customFragmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHostInput">customHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPathInput">customPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryStringInput">customQueryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocolInput">redirectProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectTypeInput">redirectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragment">customFragment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHost">customHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPath">customPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryString">customQueryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocol">redirectProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectType">redirectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customFragmentInput`<sup>Optional</sup> <a name="customFragmentInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragmentInput"></a>

```java
public java.lang.String getCustomFragmentInput();
```

- *Type:* java.lang.String

---

##### `customHostInput`<sup>Optional</sup> <a name="customHostInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHostInput"></a>

```java
public java.lang.String getCustomHostInput();
```

- *Type:* java.lang.String

---

##### `customPathInput`<sup>Optional</sup> <a name="customPathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPathInput"></a>

```java
public java.lang.String getCustomPathInput();
```

- *Type:* java.lang.String

---

##### `customQueryStringInput`<sup>Optional</sup> <a name="customQueryStringInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryStringInput"></a>

```java
public java.lang.String getCustomQueryStringInput();
```

- *Type:* java.lang.String

---

##### `redirectProtocolInput`<sup>Optional</sup> <a name="redirectProtocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocolInput"></a>

```java
public java.lang.String getRedirectProtocolInput();
```

- *Type:* java.lang.String

---

##### `redirectTypeInput`<sup>Optional</sup> <a name="redirectTypeInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectTypeInput"></a>

```java
public java.lang.String getRedirectTypeInput();
```

- *Type:* java.lang.String

---

##### `customFragment`<sup>Required</sup> <a name="customFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragment"></a>

```java
public java.lang.String getCustomFragment();
```

- *Type:* java.lang.String

---

##### `customHost`<sup>Required</sup> <a name="customHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHost"></a>

```java
public java.lang.String getCustomHost();
```

- *Type:* java.lang.String

---

##### `customPath`<sup>Required</sup> <a name="customPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPath"></a>

```java
public java.lang.String getCustomPath();
```

- *Type:* java.lang.String

---

##### `customQueryString`<sup>Required</sup> <a name="customQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryString"></a>

```java
public java.lang.String getCustomQueryString();
```

- *Type:* java.lang.String

---

##### `redirectProtocol`<sup>Required</sup> <a name="redirectProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocol"></a>

```java
public java.lang.String getRedirectProtocol();
```

- *Type:* java.lang.String

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectType"></a>

```java
public java.lang.String getRedirectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.internalValue"></a>

```java
public FrontdoorRoutingRuleRedirectConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---


### FrontdoorTimeoutsOutputReference <a name="FrontdoorTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor.FrontdoorTimeoutsOutputReference;

new FrontdoorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

---




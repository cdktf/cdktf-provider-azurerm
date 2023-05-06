# `azurerm_stream_analytics_managed_private_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_managed_private_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint).

# `streamAnalyticsManagedPrivateEndpoint` Submodule <a name="`streamAnalyticsManagedPrivateEndpoint` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsManagedPrivateEndpoint <a name="StreamAnalyticsManagedPrivateEndpoint" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint azurerm_stream_analytics_managed_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_managed_private_endpoint.StreamAnalyticsManagedPrivateEndpoint;

StreamAnalyticsManagedPrivateEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .streamAnalyticsClusterName(java.lang.String)
    .subresourceName(java.lang.String)
    .targetResourceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StreamAnalyticsManagedPrivateEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.streamAnalyticsClusterName">streamAnalyticsClusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.subresourceName">subresourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}.

---

##### `streamAnalyticsClusterName`<sup>Required</sup> <a name="streamAnalyticsClusterName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.streamAnalyticsClusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}.

---

##### `subresourceName`<sup>Required</sup> <a name="subresourceName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.subresourceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.targetResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#timeouts StreamAnalyticsManagedPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsManagedPrivateEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_managed_private_endpoint.StreamAnalyticsManagedPrivateEndpoint;

StreamAnalyticsManagedPrivateEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_managed_private_endpoint.StreamAnalyticsManagedPrivateEndpoint;

StreamAnalyticsManagedPrivateEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_managed_private_endpoint.StreamAnalyticsManagedPrivateEndpoint;

StreamAnalyticsManagedPrivateEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference">StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterNameInput">streamAnalyticsClusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceNameInput">subresourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterName">streamAnalyticsClusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceName">subresourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeouts"></a>

```java
public StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference">StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsClusterNameInput`<sup>Optional</sup> <a name="streamAnalyticsClusterNameInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterNameInput"></a>

```java
public java.lang.String getStreamAnalyticsClusterNameInput();
```

- *Type:* java.lang.String

---

##### `subresourceNameInput`<sup>Optional</sup> <a name="subresourceNameInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceNameInput"></a>

```java
public java.lang.String getSubresourceNameInput();
```

- *Type:* java.lang.String

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceIdInput"></a>

```java
public java.lang.String getTargetResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsClusterName`<sup>Required</sup> <a name="streamAnalyticsClusterName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterName"></a>

```java
public java.lang.String getStreamAnalyticsClusterName();
```

- *Type:* java.lang.String

---

##### `subresourceName`<sup>Required</sup> <a name="subresourceName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceName"></a>

```java
public java.lang.String getSubresourceName();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsManagedPrivateEndpointConfig <a name="StreamAnalyticsManagedPrivateEndpointConfig" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_managed_private_endpoint.StreamAnalyticsManagedPrivateEndpointConfig;

StreamAnalyticsManagedPrivateEndpointConfig.builder()
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
    .streamAnalyticsClusterName(java.lang.String)
    .subresourceName(java.lang.String)
    .targetResourceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StreamAnalyticsManagedPrivateEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.streamAnalyticsClusterName">streamAnalyticsClusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.subresourceName">subresourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}.

---

##### `streamAnalyticsClusterName`<sup>Required</sup> <a name="streamAnalyticsClusterName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.streamAnalyticsClusterName"></a>

```java
public java.lang.String getStreamAnalyticsClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}.

---

##### `subresourceName`<sup>Required</sup> <a name="subresourceName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.subresourceName"></a>

```java
public java.lang.String getSubresourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.timeouts"></a>

```java
public StreamAnalyticsManagedPrivateEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#timeouts StreamAnalyticsManagedPrivateEndpoint#timeouts}

---

### StreamAnalyticsManagedPrivateEndpointTimeouts <a name="StreamAnalyticsManagedPrivateEndpointTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_managed_private_endpoint.StreamAnalyticsManagedPrivateEndpointTimeouts;

StreamAnalyticsManagedPrivateEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#create StreamAnalyticsManagedPrivateEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#delete StreamAnalyticsManagedPrivateEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#read StreamAnalyticsManagedPrivateEndpoint#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#create StreamAnalyticsManagedPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#delete StreamAnalyticsManagedPrivateEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_managed_private_endpoint#read StreamAnalyticsManagedPrivateEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference <a name="StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_managed_private_endpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference;

new StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---




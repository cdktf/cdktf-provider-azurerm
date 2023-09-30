# `azurerm_signalr_shared_private_link_resource`

Refer to the Terraform Registory for docs: [`azurerm_signalr_shared_private_link_resource`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource).

# `signalrSharedPrivateLinkResource` Submodule <a name="`signalrSharedPrivateLinkResource` Submodule" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrSharedPrivateLinkResource <a name="SignalrSharedPrivateLinkResource" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource azurerm_signalr_shared_private_link_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_shared_private_link_resource.SignalrSharedPrivateLinkResource;

SignalrSharedPrivateLinkResource.Builder.create(Construct scope, java.lang.String id)
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
    .signalrServiceId(java.lang.String)
    .subResourceName(java.lang.String)
    .targetResourceId(java.lang.String)
//  .id(java.lang.String)
//  .requestMessage(java.lang.String)
//  .timeouts(SignalrSharedPrivateLinkResourceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#name SignalrSharedPrivateLinkResource#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.signalrServiceId">signalrServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#signalr_service_id SignalrSharedPrivateLinkResource#signalr_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.subResourceName">subResourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#sub_resource_name SignalrSharedPrivateLinkResource#sub_resource_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#target_resource_id SignalrSharedPrivateLinkResource#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#id SignalrSharedPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#request_message SignalrSharedPrivateLinkResource#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#name SignalrSharedPrivateLinkResource#name}.

---

##### `signalrServiceId`<sup>Required</sup> <a name="signalrServiceId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.signalrServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#signalr_service_id SignalrSharedPrivateLinkResource#signalr_service_id}.

---

##### `subResourceName`<sup>Required</sup> <a name="subResourceName" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.subResourceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#sub_resource_name SignalrSharedPrivateLinkResource#sub_resource_name}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.targetResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#target_resource_id SignalrSharedPrivateLinkResource#target_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#id SignalrSharedPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.requestMessage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#request_message SignalrSharedPrivateLinkResource#request_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#timeouts SignalrSharedPrivateLinkResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetRequestMessage">resetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.putTimeouts"></a>

```java
public void putTimeouts(SignalrSharedPrivateLinkResourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetId"></a>

```java
public void resetId()
```

##### `resetRequestMessage` <a name="resetRequestMessage" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetRequestMessage"></a>

```java
public void resetRequestMessage()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_shared_private_link_resource.SignalrSharedPrivateLinkResource;

SignalrSharedPrivateLinkResource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_shared_private_link_resource.SignalrSharedPrivateLinkResource;

SignalrSharedPrivateLinkResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_shared_private_link_resource.SignalrSharedPrivateLinkResource;

SignalrSharedPrivateLinkResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference">SignalrSharedPrivateLinkResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessageInput">requestMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceIdInput">signalrServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceNameInput">subResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceId">signalrServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceName">subResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeouts"></a>

```java
public SignalrSharedPrivateLinkResourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference">SignalrSharedPrivateLinkResourceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requestMessageInput`<sup>Optional</sup> <a name="requestMessageInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessageInput"></a>

```java
public java.lang.String getRequestMessageInput();
```

- *Type:* java.lang.String

---

##### `signalrServiceIdInput`<sup>Optional</sup> <a name="signalrServiceIdInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceIdInput"></a>

```java
public java.lang.String getSignalrServiceIdInput();
```

- *Type:* java.lang.String

---

##### `subResourceNameInput`<sup>Optional</sup> <a name="subResourceNameInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceNameInput"></a>

```java
public java.lang.String getSubResourceNameInput();
```

- *Type:* java.lang.String

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceIdInput"></a>

```java
public java.lang.String getTargetResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `requestMessage`<sup>Required</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessage"></a>

```java
public java.lang.String getRequestMessage();
```

- *Type:* java.lang.String

---

##### `signalrServiceId`<sup>Required</sup> <a name="signalrServiceId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceId"></a>

```java
public java.lang.String getSignalrServiceId();
```

- *Type:* java.lang.String

---

##### `subResourceName`<sup>Required</sup> <a name="subResourceName" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceName"></a>

```java
public java.lang.String getSubResourceName();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrSharedPrivateLinkResourceConfig <a name="SignalrSharedPrivateLinkResourceConfig" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_shared_private_link_resource.SignalrSharedPrivateLinkResourceConfig;

SignalrSharedPrivateLinkResourceConfig.builder()
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
    .signalrServiceId(java.lang.String)
    .subResourceName(java.lang.String)
    .targetResourceId(java.lang.String)
//  .id(java.lang.String)
//  .requestMessage(java.lang.String)
//  .timeouts(SignalrSharedPrivateLinkResourceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#name SignalrSharedPrivateLinkResource#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.signalrServiceId">signalrServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#signalr_service_id SignalrSharedPrivateLinkResource#signalr_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.subResourceName">subResourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#sub_resource_name SignalrSharedPrivateLinkResource#sub_resource_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#target_resource_id SignalrSharedPrivateLinkResource#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#id SignalrSharedPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#request_message SignalrSharedPrivateLinkResource#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#name SignalrSharedPrivateLinkResource#name}.

---

##### `signalrServiceId`<sup>Required</sup> <a name="signalrServiceId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.signalrServiceId"></a>

```java
public java.lang.String getSignalrServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#signalr_service_id SignalrSharedPrivateLinkResource#signalr_service_id}.

---

##### `subResourceName`<sup>Required</sup> <a name="subResourceName" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.subResourceName"></a>

```java
public java.lang.String getSubResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#sub_resource_name SignalrSharedPrivateLinkResource#sub_resource_name}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#target_resource_id SignalrSharedPrivateLinkResource#target_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#id SignalrSharedPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.requestMessage"></a>

```java
public java.lang.String getRequestMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#request_message SignalrSharedPrivateLinkResource#request_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.timeouts"></a>

```java
public SignalrSharedPrivateLinkResourceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#timeouts SignalrSharedPrivateLinkResource#timeouts}

---

### SignalrSharedPrivateLinkResourceTimeouts <a name="SignalrSharedPrivateLinkResourceTimeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_shared_private_link_resource.SignalrSharedPrivateLinkResourceTimeouts;

SignalrSharedPrivateLinkResourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#create SignalrSharedPrivateLinkResource#create}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#delete SignalrSharedPrivateLinkResource#delete}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#read SignalrSharedPrivateLinkResource#read}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#update SignalrSharedPrivateLinkResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#create SignalrSharedPrivateLinkResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#delete SignalrSharedPrivateLinkResource#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#read SignalrSharedPrivateLinkResource#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/signalr_shared_private_link_resource#update SignalrSharedPrivateLinkResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrSharedPrivateLinkResourceTimeoutsOutputReference <a name="SignalrSharedPrivateLinkResourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_shared_private_link_resource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference;

new SignalrSharedPrivateLinkResourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

---




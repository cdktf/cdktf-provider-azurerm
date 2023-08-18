# `azurerm_iothub_shared_access_policy`

Refer to the Terraform Registory for docs: [`azurerm_iothub_shared_access_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy).

# `iothubSharedAccessPolicy` Submodule <a name="`iothubSharedAccessPolicy` Submodule" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubSharedAccessPolicyA <a name="IothubSharedAccessPolicyA" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy azurerm_iothub_shared_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_shared_access_policy.IothubSharedAccessPolicyA;

IothubSharedAccessPolicyA.Builder.create(Construct scope, java.lang.String id)
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
    .iothubName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .deviceConnect(java.lang.Boolean)
//  .deviceConnect(IResolvable)
//  .id(java.lang.String)
//  .registryRead(java.lang.Boolean)
//  .registryRead(IResolvable)
//  .registryWrite(java.lang.Boolean)
//  .registryWrite(IResolvable)
//  .serviceConnect(java.lang.Boolean)
//  .serviceConnect(IResolvable)
//  .timeouts(IothubSharedAccessPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.iothubName">iothubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#iothub_name IothubSharedAccessPolicyA#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#name IothubSharedAccessPolicyA#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#resource_group_name IothubSharedAccessPolicyA#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.deviceConnect">deviceConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#device_connect IothubSharedAccessPolicyA#device_connect}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#id IothubSharedAccessPolicyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.registryRead">registryRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#registry_read IothubSharedAccessPolicyA#registry_read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.registryWrite">registryWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#registry_write IothubSharedAccessPolicyA#registry_write}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.serviceConnect">serviceConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#service_connect IothubSharedAccessPolicyA#service_connect}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iothubName`<sup>Required</sup> <a name="iothubName" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.iothubName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#iothub_name IothubSharedAccessPolicyA#iothub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#name IothubSharedAccessPolicyA#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#resource_group_name IothubSharedAccessPolicyA#resource_group_name}.

---

##### `deviceConnect`<sup>Optional</sup> <a name="deviceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.deviceConnect"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#device_connect IothubSharedAccessPolicyA#device_connect}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#id IothubSharedAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registryRead`<sup>Optional</sup> <a name="registryRead" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.registryRead"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#registry_read IothubSharedAccessPolicyA#registry_read}.

---

##### `registryWrite`<sup>Optional</sup> <a name="registryWrite" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.registryWrite"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#registry_write IothubSharedAccessPolicyA#registry_write}.

---

##### `serviceConnect`<sup>Optional</sup> <a name="serviceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.serviceConnect"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#service_connect IothubSharedAccessPolicyA#service_connect}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#timeouts IothubSharedAccessPolicyA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetDeviceConnect">resetDeviceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryRead">resetRegistryRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryWrite">resetRegistryWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetServiceConnect">resetServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts"></a>

```java
public void putTimeouts(IothubSharedAccessPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

---

##### `resetDeviceConnect` <a name="resetDeviceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetDeviceConnect"></a>

```java
public void resetDeviceConnect()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetId"></a>

```java
public void resetId()
```

##### `resetRegistryRead` <a name="resetRegistryRead" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryRead"></a>

```java
public void resetRegistryRead()
```

##### `resetRegistryWrite` <a name="resetRegistryWrite" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryWrite"></a>

```java
public void resetRegistryWrite()
```

##### `resetServiceConnect` <a name="resetServiceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetServiceConnect"></a>

```java
public void resetServiceConnect()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_shared_access_policy.IothubSharedAccessPolicyA;

IothubSharedAccessPolicyA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_shared_access_policy.IothubSharedAccessPolicyA;

IothubSharedAccessPolicyA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_shared_access_policy.IothubSharedAccessPolicyA;

IothubSharedAccessPolicyA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryConnectionString">primaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference">IothubSharedAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnectInput">deviceConnectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubNameInput">iothubNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryReadInput">registryReadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWriteInput">registryWriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnectInput">serviceConnectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnect">deviceConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubName">iothubName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryRead">registryRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWrite">registryWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnect">serviceConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryConnectionString"></a>

```java
public java.lang.String getPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryConnectionString"></a>

```java
public java.lang.String getSecondaryConnectionString();
```

- *Type:* java.lang.String

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryKey"></a>

```java
public java.lang.String getSecondaryKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeouts"></a>

```java
public IothubSharedAccessPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference">IothubSharedAccessPolicyTimeoutsOutputReference</a>

---

##### `deviceConnectInput`<sup>Optional</sup> <a name="deviceConnectInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnectInput"></a>

```java
public java.lang.Object getDeviceConnectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iothubNameInput`<sup>Optional</sup> <a name="iothubNameInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubNameInput"></a>

```java
public java.lang.String getIothubNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `registryReadInput`<sup>Optional</sup> <a name="registryReadInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryReadInput"></a>

```java
public java.lang.Object getRegistryReadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `registryWriteInput`<sup>Optional</sup> <a name="registryWriteInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWriteInput"></a>

```java
public java.lang.Object getRegistryWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serviceConnectInput`<sup>Optional</sup> <a name="serviceConnectInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnectInput"></a>

```java
public java.lang.Object getServiceConnectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

---

##### `deviceConnect`<sup>Required</sup> <a name="deviceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnect"></a>

```java
public java.lang.Object getDeviceConnect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iothubName`<sup>Required</sup> <a name="iothubName" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubName"></a>

```java
public java.lang.String getIothubName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `registryRead`<sup>Required</sup> <a name="registryRead" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryRead"></a>

```java
public java.lang.Object getRegistryRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `registryWrite`<sup>Required</sup> <a name="registryWrite" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWrite"></a>

```java
public java.lang.Object getRegistryWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `serviceConnect`<sup>Required</sup> <a name="serviceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnect"></a>

```java
public java.lang.Object getServiceConnect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IothubSharedAccessPolicyAConfig <a name="IothubSharedAccessPolicyAConfig" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_shared_access_policy.IothubSharedAccessPolicyAConfig;

IothubSharedAccessPolicyAConfig.builder()
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
    .iothubName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .deviceConnect(java.lang.Boolean)
//  .deviceConnect(IResolvable)
//  .id(java.lang.String)
//  .registryRead(java.lang.Boolean)
//  .registryRead(IResolvable)
//  .registryWrite(java.lang.Boolean)
//  .registryWrite(IResolvable)
//  .serviceConnect(java.lang.Boolean)
//  .serviceConnect(IResolvable)
//  .timeouts(IothubSharedAccessPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.iothubName">iothubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#iothub_name IothubSharedAccessPolicyA#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#name IothubSharedAccessPolicyA#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#resource_group_name IothubSharedAccessPolicyA#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.deviceConnect">deviceConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#device_connect IothubSharedAccessPolicyA#device_connect}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#id IothubSharedAccessPolicyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryRead">registryRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#registry_read IothubSharedAccessPolicyA#registry_read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryWrite">registryWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#registry_write IothubSharedAccessPolicyA#registry_write}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.serviceConnect">serviceConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#service_connect IothubSharedAccessPolicyA#service_connect}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iothubName`<sup>Required</sup> <a name="iothubName" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.iothubName"></a>

```java
public java.lang.String getIothubName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#iothub_name IothubSharedAccessPolicyA#iothub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#name IothubSharedAccessPolicyA#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#resource_group_name IothubSharedAccessPolicyA#resource_group_name}.

---

##### `deviceConnect`<sup>Optional</sup> <a name="deviceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.deviceConnect"></a>

```java
public java.lang.Object getDeviceConnect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#device_connect IothubSharedAccessPolicyA#device_connect}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#id IothubSharedAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registryRead`<sup>Optional</sup> <a name="registryRead" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryRead"></a>

```java
public java.lang.Object getRegistryRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#registry_read IothubSharedAccessPolicyA#registry_read}.

---

##### `registryWrite`<sup>Optional</sup> <a name="registryWrite" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryWrite"></a>

```java
public java.lang.Object getRegistryWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#registry_write IothubSharedAccessPolicyA#registry_write}.

---

##### `serviceConnect`<sup>Optional</sup> <a name="serviceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.serviceConnect"></a>

```java
public java.lang.Object getServiceConnect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#service_connect IothubSharedAccessPolicyA#service_connect}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.timeouts"></a>

```java
public IothubSharedAccessPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#timeouts IothubSharedAccessPolicyA#timeouts}

---

### IothubSharedAccessPolicyTimeouts <a name="IothubSharedAccessPolicyTimeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_shared_access_policy.IothubSharedAccessPolicyTimeouts;

IothubSharedAccessPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#create IothubSharedAccessPolicyA#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#delete IothubSharedAccessPolicyA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#read IothubSharedAccessPolicyA#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#update IothubSharedAccessPolicyA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#create IothubSharedAccessPolicyA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#delete IothubSharedAccessPolicyA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#read IothubSharedAccessPolicyA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/iothub_shared_access_policy#update IothubSharedAccessPolicyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubSharedAccessPolicyTimeoutsOutputReference <a name="IothubSharedAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_shared_access_policy.IothubSharedAccessPolicyTimeoutsOutputReference;

new IothubSharedAccessPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

---




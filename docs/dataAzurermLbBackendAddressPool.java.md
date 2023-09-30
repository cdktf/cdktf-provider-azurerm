# `data_azurerm_lb_backend_address_pool`

Refer to the Terraform Registory for docs: [`data_azurerm_lb_backend_address_pool`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool).

# `dataAzurermLbBackendAddressPool` Submodule <a name="`dataAzurermLbBackendAddressPool` Submodule" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLbBackendAddressPool <a name="DataAzurermLbBackendAddressPool" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool azurerm_lb_backend_address_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPool;

DataAzurermLbBackendAddressPool.Builder.create(Construct scope, java.lang.String id)
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
    .loadbalancerId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermLbBackendAddressPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#loadbalancer_id DataAzurermLbBackendAddressPool#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#name DataAzurermLbBackendAddressPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#id DataAzurermLbBackendAddressPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.loadbalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#loadbalancer_id DataAzurermLbBackendAddressPool#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#name DataAzurermLbBackendAddressPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#id DataAzurermLbBackendAddressPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#timeouts DataAzurermLbBackendAddressPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermLbBackendAddressPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPool;

DataAzurermLbBackendAddressPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPool;

DataAzurermLbBackendAddressPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPool;

DataAzurermLbBackendAddressPool.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendAddress">backendAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList">DataAzurermLbBackendAddressPoolBackendAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendIpConfigurations">backendIpConfigurations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList">DataAzurermLbBackendAddressPoolBackendIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.inboundNatRules">inboundNatRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadBalancingRules">loadBalancingRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.outboundRules">outboundRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference">DataAzurermLbBackendAddressPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerIdInput">loadbalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `backendAddress`<sup>Required</sup> <a name="backendAddress" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendAddress"></a>

```java
public DataAzurermLbBackendAddressPoolBackendAddressList getBackendAddress();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList">DataAzurermLbBackendAddressPoolBackendAddressList</a>

---

##### `backendIpConfigurations`<sup>Required</sup> <a name="backendIpConfigurations" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendIpConfigurations"></a>

```java
public DataAzurermLbBackendAddressPoolBackendIpConfigurationsList getBackendIpConfigurations();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList">DataAzurermLbBackendAddressPoolBackendIpConfigurationsList</a>

---

##### `inboundNatRules`<sup>Required</sup> <a name="inboundNatRules" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.inboundNatRules"></a>

```java
public java.util.List<java.lang.String> getInboundNatRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancingRules`<sup>Required</sup> <a name="loadBalancingRules" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadBalancingRules"></a>

```java
public java.util.List<java.lang.String> getLoadBalancingRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outboundRules`<sup>Required</sup> <a name="outboundRules" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.outboundRules"></a>

```java
public java.util.List<java.lang.String> getOutboundRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeouts"></a>

```java
public DataAzurermLbBackendAddressPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference">DataAzurermLbBackendAddressPoolTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadbalancerIdInput`<sup>Optional</sup> <a name="loadbalancerIdInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerIdInput"></a>

```java
public java.lang.String getLoadbalancerIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerId"></a>

```java
public java.lang.String getLoadbalancerId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLbBackendAddressPoolBackendAddress <a name="DataAzurermLbBackendAddressPoolBackendAddress" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolBackendAddress;

DataAzurermLbBackendAddressPoolBackendAddress.builder()
    .build();
```


### DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping <a name="DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping;

DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping.builder()
    .build();
```


### DataAzurermLbBackendAddressPoolBackendIpConfigurations <a name="DataAzurermLbBackendAddressPoolBackendIpConfigurations" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolBackendIpConfigurations;

DataAzurermLbBackendAddressPoolBackendIpConfigurations.builder()
    .build();
```


### DataAzurermLbBackendAddressPoolConfig <a name="DataAzurermLbBackendAddressPoolConfig" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolConfig;

DataAzurermLbBackendAddressPoolConfig.builder()
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
    .loadbalancerId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermLbBackendAddressPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#loadbalancer_id DataAzurermLbBackendAddressPool#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#name DataAzurermLbBackendAddressPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#id DataAzurermLbBackendAddressPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.loadbalancerId"></a>

```java
public java.lang.String getLoadbalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#loadbalancer_id DataAzurermLbBackendAddressPool#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#name DataAzurermLbBackendAddressPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#id DataAzurermLbBackendAddressPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.timeouts"></a>

```java
public DataAzurermLbBackendAddressPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#timeouts DataAzurermLbBackendAddressPool#timeouts}

---

### DataAzurermLbBackendAddressPoolTimeouts <a name="DataAzurermLbBackendAddressPoolTimeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolTimeouts;

DataAzurermLbBackendAddressPoolTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#read DataAzurermLbBackendAddressPool#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/lb_backend_address_pool#read DataAzurermLbBackendAddressPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList <a name="DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList;

new DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.get"></a>

```java
public DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference <a name="DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference;

new DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.frontendPort">frontendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName">inboundNatRuleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.frontendPort"></a>

```java
public java.lang.Number getFrontendPort();
```

- *Type:* java.lang.Number

---

##### `inboundNatRuleName`<sup>Required</sup> <a name="inboundNatRuleName" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName"></a>

```java
public java.lang.String getInboundNatRuleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.internalValue"></a>

```java
public DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping</a>

---


### DataAzurermLbBackendAddressPoolBackendAddressList <a name="DataAzurermLbBackendAddressPoolBackendAddressList" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolBackendAddressList;

new DataAzurermLbBackendAddressPoolBackendAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.get"></a>

```java
public DataAzurermLbBackendAddressPoolBackendAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermLbBackendAddressPoolBackendAddressOutputReference <a name="DataAzurermLbBackendAddressPoolBackendAddressOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference;

new DataAzurermLbBackendAddressPoolBackendAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.inboundNatRulePortMapping">inboundNatRulePortMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress">DataAzurermLbBackendAddressPoolBackendAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inboundNatRulePortMapping`<sup>Required</sup> <a name="inboundNatRulePortMapping" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.inboundNatRulePortMapping"></a>

```java
public DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList getInboundNatRulePortMapping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.internalValue"></a>

```java
public DataAzurermLbBackendAddressPoolBackendAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress">DataAzurermLbBackendAddressPoolBackendAddress</a>

---


### DataAzurermLbBackendAddressPoolBackendIpConfigurationsList <a name="DataAzurermLbBackendAddressPoolBackendIpConfigurationsList" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList;

new DataAzurermLbBackendAddressPoolBackendIpConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.get"></a>

```java
public DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference <a name="DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference;

new DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations">DataAzurermLbBackendAddressPoolBackendIpConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAzurermLbBackendAddressPoolBackendIpConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations">DataAzurermLbBackendAddressPoolBackendIpConfigurations</a>

---


### DataAzurermLbBackendAddressPoolTimeoutsOutputReference <a name="DataAzurermLbBackendAddressPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_lb_backend_address_pool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference;

new DataAzurermLbBackendAddressPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

---




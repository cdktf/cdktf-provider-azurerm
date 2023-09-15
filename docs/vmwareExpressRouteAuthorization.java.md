# `azurerm_vmware_express_route_authorization`

Refer to the Terraform Registory for docs: [`azurerm_vmware_express_route_authorization`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization).

# `vmwareExpressRouteAuthorization` Submodule <a name="`vmwareExpressRouteAuthorization` Submodule" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareExpressRouteAuthorization <a name="VmwareExpressRouteAuthorization" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization azurerm_vmware_express_route_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_express_route_authorization.VmwareExpressRouteAuthorization;

VmwareExpressRouteAuthorization.Builder.create(Construct scope, java.lang.String id)
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
    .privateCloudId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(VmwareExpressRouteAuthorizationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.privateCloudId">privateCloudId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}.

---

##### `privateCloudId`<sup>Required</sup> <a name="privateCloudId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.privateCloudId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#timeouts VmwareExpressRouteAuthorization#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts"></a>

```java
public void putTimeouts(VmwareExpressRouteAuthorizationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_express_route_authorization.VmwareExpressRouteAuthorization;

VmwareExpressRouteAuthorization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_express_route_authorization.VmwareExpressRouteAuthorization;

VmwareExpressRouteAuthorization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_express_route_authorization.VmwareExpressRouteAuthorization;

VmwareExpressRouteAuthorization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationId">expressRouteAuthorizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationKey">expressRouteAuthorizationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference">VmwareExpressRouteAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudIdInput">privateCloudIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudId">privateCloudId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `expressRouteAuthorizationId`<sup>Required</sup> <a name="expressRouteAuthorizationId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationId"></a>

```java
public java.lang.String getExpressRouteAuthorizationId();
```

- *Type:* java.lang.String

---

##### `expressRouteAuthorizationKey`<sup>Required</sup> <a name="expressRouteAuthorizationKey" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationKey"></a>

```java
public java.lang.String getExpressRouteAuthorizationKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeouts"></a>

```java
public VmwareExpressRouteAuthorizationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference">VmwareExpressRouteAuthorizationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateCloudIdInput`<sup>Optional</sup> <a name="privateCloudIdInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudIdInput"></a>

```java
public java.lang.String getPrivateCloudIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateCloudId`<sup>Required</sup> <a name="privateCloudId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudId"></a>

```java
public java.lang.String getPrivateCloudId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareExpressRouteAuthorizationConfig <a name="VmwareExpressRouteAuthorizationConfig" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_express_route_authorization.VmwareExpressRouteAuthorizationConfig;

VmwareExpressRouteAuthorizationConfig.builder()
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
    .privateCloudId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(VmwareExpressRouteAuthorizationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.privateCloudId">privateCloudId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}.

---

##### `privateCloudId`<sup>Required</sup> <a name="privateCloudId" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.privateCloudId"></a>

```java
public java.lang.String getPrivateCloudId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.timeouts"></a>

```java
public VmwareExpressRouteAuthorizationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#timeouts VmwareExpressRouteAuthorization#timeouts}

---

### VmwareExpressRouteAuthorizationTimeouts <a name="VmwareExpressRouteAuthorizationTimeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_express_route_authorization.VmwareExpressRouteAuthorizationTimeouts;

VmwareExpressRouteAuthorizationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#create VmwareExpressRouteAuthorization#create}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#delete VmwareExpressRouteAuthorization#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#read VmwareExpressRouteAuthorization#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#create VmwareExpressRouteAuthorization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#delete VmwareExpressRouteAuthorization#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/vmware_express_route_authorization#read VmwareExpressRouteAuthorization#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareExpressRouteAuthorizationTimeoutsOutputReference <a name="VmwareExpressRouteAuthorizationTimeoutsOutputReference" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_express_route_authorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference;

new VmwareExpressRouteAuthorizationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

---




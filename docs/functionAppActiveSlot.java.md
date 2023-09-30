# `azurerm_function_app_active_slot`

Refer to the Terraform Registory for docs: [`azurerm_function_app_active_slot`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot).

# `functionAppActiveSlot` Submodule <a name="`functionAppActiveSlot` Submodule" id="@cdktf/provider-azurerm.functionAppActiveSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionAppActiveSlot <a name="FunctionAppActiveSlot" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot azurerm_function_app_active_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_active_slot.FunctionAppActiveSlot;

FunctionAppActiveSlot.Builder.create(Construct scope, java.lang.String id)
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
    .slotId(java.lang.String)
//  .id(java.lang.String)
//  .overwriteNetworkConfig(java.lang.Boolean)
//  .overwriteNetworkConfig(IResolvable)
//  .timeouts(FunctionAppActiveSlotTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.slotId">slotId</a></code> | <code>java.lang.String</code> | The ID of the Slot to swap with `Production`. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#id FunctionAppActiveSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.overwriteNetworkConfig">overwriteNetworkConfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The swap action should overwrite the Production slot's network configuration with the configuration from this slot. Defaults to `true`. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts">FunctionAppActiveSlotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `slotId`<sup>Required</sup> <a name="slotId" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.slotId"></a>

- *Type:* java.lang.String

The ID of the Slot to swap with `Production`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#slot_id FunctionAppActiveSlot#slot_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#id FunctionAppActiveSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwriteNetworkConfig`<sup>Optional</sup> <a name="overwriteNetworkConfig" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.overwriteNetworkConfig"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The swap action should overwrite the Production slot's network configuration with the configuration from this slot. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#overwrite_network_config FunctionAppActiveSlot#overwrite_network_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts">FunctionAppActiveSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#timeouts FunctionAppActiveSlot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.resetOverwriteNetworkConfig">resetOverwriteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.putTimeouts"></a>

```java
public void putTimeouts(FunctionAppActiveSlotTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts">FunctionAppActiveSlotTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.resetId"></a>

```java
public void resetId()
```

##### `resetOverwriteNetworkConfig` <a name="resetOverwriteNetworkConfig" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.resetOverwriteNetworkConfig"></a>

```java
public void resetOverwriteNetworkConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_active_slot.FunctionAppActiveSlot;

FunctionAppActiveSlot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_active_slot.FunctionAppActiveSlot;

FunctionAppActiveSlot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_active_slot.FunctionAppActiveSlot;

FunctionAppActiveSlot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.lastSuccessfulSwap">lastSuccessfulSwap</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference">FunctionAppActiveSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.overwriteNetworkConfigInput">overwriteNetworkConfigInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.slotIdInput">slotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts">FunctionAppActiveSlotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.overwriteNetworkConfig">overwriteNetworkConfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.slotId">slotId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lastSuccessfulSwap`<sup>Required</sup> <a name="lastSuccessfulSwap" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.lastSuccessfulSwap"></a>

```java
public java.lang.String getLastSuccessfulSwap();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.timeouts"></a>

```java
public FunctionAppActiveSlotTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference">FunctionAppActiveSlotTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `overwriteNetworkConfigInput`<sup>Optional</sup> <a name="overwriteNetworkConfigInput" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.overwriteNetworkConfigInput"></a>

```java
public java.lang.Object getOverwriteNetworkConfigInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `slotIdInput`<sup>Optional</sup> <a name="slotIdInput" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.slotIdInput"></a>

```java
public java.lang.String getSlotIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts">FunctionAppActiveSlotTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `overwriteNetworkConfig`<sup>Required</sup> <a name="overwriteNetworkConfig" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.overwriteNetworkConfig"></a>

```java
public java.lang.Object getOverwriteNetworkConfig();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `slotId`<sup>Required</sup> <a name="slotId" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.slotId"></a>

```java
public java.lang.String getSlotId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppActiveSlotConfig <a name="FunctionAppActiveSlotConfig" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_active_slot.FunctionAppActiveSlotConfig;

FunctionAppActiveSlotConfig.builder()
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
    .slotId(java.lang.String)
//  .id(java.lang.String)
//  .overwriteNetworkConfig(java.lang.Boolean)
//  .overwriteNetworkConfig(IResolvable)
//  .timeouts(FunctionAppActiveSlotTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.slotId">slotId</a></code> | <code>java.lang.String</code> | The ID of the Slot to swap with `Production`. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#id FunctionAppActiveSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.overwriteNetworkConfig">overwriteNetworkConfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The swap action should overwrite the Production slot's network configuration with the configuration from this slot. Defaults to `true`. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts">FunctionAppActiveSlotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `slotId`<sup>Required</sup> <a name="slotId" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.slotId"></a>

```java
public java.lang.String getSlotId();
```

- *Type:* java.lang.String

The ID of the Slot to swap with `Production`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#slot_id FunctionAppActiveSlot#slot_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#id FunctionAppActiveSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwriteNetworkConfig`<sup>Optional</sup> <a name="overwriteNetworkConfig" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.overwriteNetworkConfig"></a>

```java
public java.lang.Object getOverwriteNetworkConfig();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The swap action should overwrite the Production slot's network configuration with the configuration from this slot. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#overwrite_network_config FunctionAppActiveSlot#overwrite_network_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotConfig.property.timeouts"></a>

```java
public FunctionAppActiveSlotTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts">FunctionAppActiveSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#timeouts FunctionAppActiveSlot#timeouts}

---

### FunctionAppActiveSlotTimeouts <a name="FunctionAppActiveSlotTimeouts" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_active_slot.FunctionAppActiveSlotTimeouts;

FunctionAppActiveSlotTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#create FunctionAppActiveSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#delete FunctionAppActiveSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#read FunctionAppActiveSlot#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#update FunctionAppActiveSlot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#create FunctionAppActiveSlot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#delete FunctionAppActiveSlot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#read FunctionAppActiveSlot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/function_app_active_slot#update FunctionAppActiveSlot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppActiveSlotTimeoutsOutputReference <a name="FunctionAppActiveSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_active_slot.FunctionAppActiveSlotTimeoutsOutputReference;

new FunctionAppActiveSlotTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts">FunctionAppActiveSlotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppActiveSlot.FunctionAppActiveSlotTimeouts">FunctionAppActiveSlotTimeouts</a>

---




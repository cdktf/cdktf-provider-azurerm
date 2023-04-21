# `data_azurerm_lb_backend_address_pool`

Refer to the Terraform Registory for docs: [`data_azurerm_lb_backend_address_pool`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool).

# `dataAzurermLbBackendAddressPool` Submodule <a name="`dataAzurermLbBackendAddressPool` Submodule" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLbBackendAddressPool <a name="DataAzurermLbBackendAddressPool" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool azurerm_lb_backend_address_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPool(Construct Scope, string Id, DataAzurermLbBackendAddressPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig">DataAzurermLbBackendAddressPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig">DataAzurermLbBackendAddressPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermLbBackendAddressPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermLbBackendAddressPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermLbBackendAddressPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermLbBackendAddressPool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendAddress">BackendAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList">DataAzurermLbBackendAddressPoolBackendAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendIpConfigurations">BackendIpConfigurations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList">DataAzurermLbBackendAddressPoolBackendIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.inboundNatRules">InboundNatRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadBalancingRules">LoadBalancingRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.outboundRules">OutboundRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference">DataAzurermLbBackendAddressPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerIdInput">LoadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerId">LoadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BackendAddress`<sup>Required</sup> <a name="BackendAddress" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendAddress"></a>

```csharp
public DataAzurermLbBackendAddressPoolBackendAddressList BackendAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList">DataAzurermLbBackendAddressPoolBackendAddressList</a>

---

##### `BackendIpConfigurations`<sup>Required</sup> <a name="BackendIpConfigurations" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendIpConfigurations"></a>

```csharp
public DataAzurermLbBackendAddressPoolBackendIpConfigurationsList BackendIpConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList">DataAzurermLbBackendAddressPoolBackendIpConfigurationsList</a>

---

##### `InboundNatRules`<sup>Required</sup> <a name="InboundNatRules" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.inboundNatRules"></a>

```csharp
public string[] InboundNatRules { get; }
```

- *Type:* string[]

---

##### `LoadBalancingRules`<sup>Required</sup> <a name="LoadBalancingRules" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadBalancingRules"></a>

```csharp
public string[] LoadBalancingRules { get; }
```

- *Type:* string[]

---

##### `OutboundRules`<sup>Required</sup> <a name="OutboundRules" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.outboundRules"></a>

```csharp
public string[] OutboundRules { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeouts"></a>

```csharp
public DataAzurermLbBackendAddressPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference">DataAzurermLbBackendAddressPoolTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadbalancerIdInput`<sup>Optional</sup> <a name="LoadbalancerIdInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerIdInput"></a>

```csharp
public string LoadbalancerIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerId"></a>

```csharp
public string LoadbalancerId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLbBackendAddressPoolBackendAddress <a name="DataAzurermLbBackendAddressPoolBackendAddress" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolBackendAddress {

};
```


### DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping <a name="DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping {

};
```


### DataAzurermLbBackendAddressPoolBackendIpConfigurations <a name="DataAzurermLbBackendAddressPoolBackendIpConfigurations" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolBackendIpConfigurations {

};
```


### DataAzurermLbBackendAddressPoolConfig <a name="DataAzurermLbBackendAddressPoolConfig" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LoadbalancerId,
    string Name,
    string Id = null,
    DataAzurermLbBackendAddressPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.loadbalancerId">LoadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool#loadbalancer_id DataAzurermLbBackendAddressPool#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool#name DataAzurermLbBackendAddressPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool#id DataAzurermLbBackendAddressPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.loadbalancerId"></a>

```csharp
public string LoadbalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool#loadbalancer_id DataAzurermLbBackendAddressPool#loadbalancer_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool#name DataAzurermLbBackendAddressPool#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool#id DataAzurermLbBackendAddressPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.timeouts"></a>

```csharp
public DataAzurermLbBackendAddressPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool#timeouts DataAzurermLbBackendAddressPool#timeouts}

---

### DataAzurermLbBackendAddressPoolTimeouts <a name="DataAzurermLbBackendAddressPoolTimeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool#read DataAzurermLbBackendAddressPool#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/lb_backend_address_pool#read DataAzurermLbBackendAddressPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList <a name="DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.get"></a>

```csharp
private DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference <a name="DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.backendPort">BackendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.frontendPort">FrontendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName">InboundNatRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.backendPort"></a>

```csharp
public double BackendPort { get; }
```

- *Type:* double

---

##### `FrontendPort`<sup>Required</sup> <a name="FrontendPort" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.frontendPort"></a>

```csharp
public double FrontendPort { get; }
```

- *Type:* double

---

##### `InboundNatRuleName`<sup>Required</sup> <a name="InboundNatRuleName" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName"></a>

```csharp
public string InboundNatRuleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping</a>

---


### DataAzurermLbBackendAddressPoolBackendAddressList <a name="DataAzurermLbBackendAddressPoolBackendAddressList" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolBackendAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.get"></a>

```csharp
private DataAzurermLbBackendAddressPoolBackendAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLbBackendAddressPoolBackendAddressOutputReference <a name="DataAzurermLbBackendAddressPoolBackendAddressOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolBackendAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.inboundNatRulePortMapping">InboundNatRulePortMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress">DataAzurermLbBackendAddressPoolBackendAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InboundNatRulePortMapping`<sup>Required</sup> <a name="InboundNatRulePortMapping" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.inboundNatRulePortMapping"></a>

```csharp
public DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList InboundNatRulePortMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLbBackendAddressPoolBackendAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress">DataAzurermLbBackendAddressPoolBackendAddress</a>

---


### DataAzurermLbBackendAddressPoolBackendIpConfigurationsList <a name="DataAzurermLbBackendAddressPoolBackendIpConfigurationsList" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolBackendIpConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.get"></a>

```csharp
private DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference <a name="DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations">DataAzurermLbBackendAddressPoolBackendIpConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLbBackendAddressPoolBackendIpConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations">DataAzurermLbBackendAddressPoolBackendIpConfigurations</a>

---


### DataAzurermLbBackendAddressPoolTimeoutsOutputReference <a name="DataAzurermLbBackendAddressPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLbBackendAddressPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



